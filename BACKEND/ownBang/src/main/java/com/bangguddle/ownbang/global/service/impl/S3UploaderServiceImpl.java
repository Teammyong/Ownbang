package com.bangguddle.ownbang.global.service.impl;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.SdkClientException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.PutObjectRequest;
import com.amazonaws.services.s3.model.PutObjectResult;
import com.bangguddle.ownbang.global.enums.ErrorCode;
import com.bangguddle.ownbang.global.handler.AppException;
import com.bangguddle.ownbang.global.service.S3UploaderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;


@Slf4j
@Service
@RequiredArgsConstructor
public class S3UploaderServiceImpl implements S3UploaderService {

    private final AmazonS3 amazonS3;

    @Value("${cloud.aws.s3.bucket}")
    private String bucketName;


    @Value("${aws_cloudfront}")
    private String cloudfrontUrl;

    /**
     * S3 버켓 bucket에 파일 uploadFile을 업로드하고, 기존 파일을 삭제하는 메서드
     * @param uploadFile S3에 업로드할 파일
     * @param dirName 저장될 버켓 내 경로
     * @return S3상의 url
     */
    public String uploadToS3(File uploadFile, String dirName) {
        // S3에 저장될 파일 이름
        String fileName = dirName + "/" + uploadFile.getName();
        // S3에 업로드
        String uploadImageUrl = putS3(uploadFile, bucketName, fileName);
        // 기존 로컬 파일 삭제
        removeNewFile(uploadFile);
        return cloudfrontUrl+uploadImageUrl;
    }


    /**
     * S3 버켓 bucket에 MultipartFile을 file로 변환하여 업로드하고, 기존 파일을 삭제하는 메서드
     * @param multipartFile S3에 업로드할 MultipartFile
     * @param dirName 저장될 버켓 내 경로
     * @return S3상의 url
     */
    public String uploadMultipartFileToS3(String fileName, MultipartFile multipartFile, String dirName) {
        File convertedFile = new File(fileName);
        try(FileOutputStream fos = new FileOutputStream(convertedFile)) {
            fos.write(multipartFile.getBytes());
        } catch (IOException e) {
            throw new AppException(ErrorCode.INTERNAL_SERVER_ERROR);
        }
        return uploadToS3(convertedFile, dirName);
    }

    /**
     * upLoadFile을 S3버켓 bucketName에 fileName이란 파일명으로 업로드
     * @param uploadFile
     * @param bucket
     * @param fileName
     * @return s3 url
     */
    private String putS3(File uploadFile, String bucket, String fileName) {
        log.info("Uploading {} to {}",uploadFile.getName() , bucket);
        try {
            PutObjectResult result = amazonS3.putObject(new PutObjectRequest(bucket, fileName, uploadFile));
        } catch (AmazonServiceException e) {
            throw new AppException(ErrorCode.IMAGE_S3_UPLOAD_FAILED);
        } catch (SdkClientException e) {
            throw new AppException(ErrorCode.AWS_SDK_CLIENT_FAILED);
        }
        log.info("Successfully uploaded {} to {}", uploadFile.getName(), bucket);
        return amazonS3.getUrl(bucket, fileName).getPath();
    }

    /**
     * 로컬 파일 targetFile 삭제
     * @param targetFile
     */
    private void removeNewFile(File targetFile) {
        if(targetFile.delete()) {
            log.info("FILE DELETE SUCCESS: " + targetFile.getAbsolutePath());
            return;
        }
        log.info("FILE DELETE FAILED: " + targetFile.getAbsolutePath());
    }


}
