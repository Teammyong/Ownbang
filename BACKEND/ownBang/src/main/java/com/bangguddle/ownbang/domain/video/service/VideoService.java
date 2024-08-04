package com.bangguddle.ownbang.domain.video.service;


import com.bangguddle.ownbang.domain.video.dto.VideoRecordRequest;
import com.bangguddle.ownbang.domain.video.dto.VideoSearchResponse;
import com.bangguddle.ownbang.domain.video.dto.VideoUpdateRequest;
import com.bangguddle.ownbang.global.enums.NoneResponse;
import com.bangguddle.ownbang.global.response.SuccessResponse;

public interface VideoService {

    // 단건 조회 -> API 주 기능
    SuccessResponse<VideoSearchResponse> getVideo(Long videoId);

    // 단건 저장 -> Webrtc에서 호출 예정
    SuccessResponse<NoneResponse> registerVideo(VideoRecordRequest request);

    // 단건 수정 -> API 주 기능
    SuccessResponse<NoneResponse> modifyVideo(VideoUpdateRequest request);

}
