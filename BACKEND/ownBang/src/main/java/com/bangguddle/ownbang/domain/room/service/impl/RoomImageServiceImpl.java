package com.bangguddle.ownbang.domain.room.service.impl;


import com.bangguddle.ownbang.domain.room.entity.Room;
import com.bangguddle.ownbang.domain.room.entity.RoomImage;
import com.bangguddle.ownbang.domain.room.repository.RoomImageRepository;
import com.bangguddle.ownbang.global.enums.NoneResponse;
import com.bangguddle.ownbang.global.enums.SuccessCode;
import com.bangguddle.ownbang.global.response.SuccessResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class RoomImageServiceImpl {

    private final RoomImageRepository roomImageRepository;

    @Transactional
    protected SuccessResponse<NoneResponse> uploadImage(MultipartFile roomImage, Room room) throws IOException{
        //파일명: UUID + 사진 원래이름
        String fileName = UUID.randomUUID().toString().replace("-", "") + "_" + roomImage.getOriginalFilename();

        //실제 저장 경로
        String dbFilePath = "/upload/roomImages/" + fileName;
        Path filePath = Paths.get("src/main/resources/static", dbFilePath);

        try {
            if (!Files.exists(filePath)) {
                Files.createDirectories(filePath.getParent());
            }
            Files.write(filePath, roomImage.getBytes());
        } catch (IOException e) {
            throw new IOException("파일 저장 실패! - "+filePath);
        } catch (Exception e){
            throw e;
        }
        room.getRoomImages().add(new RoomImage(room, dbFilePath));

        return new SuccessResponse<>(SuccessCode.ROOM_IMAGE_UPLOAD_SUCCESS, NoneResponse.NONE);
    }

}
