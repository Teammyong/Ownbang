package com.bangguddle.ownbang.domain.reservation.controller;

import com.bangguddle.ownbang.domain.reservation.dto.ReservationListResponse;
import com.bangguddle.ownbang.domain.reservation.service.ReservationService;
import com.bangguddle.ownbang.global.enums.NoneResponse;
import com.bangguddle.ownbang.global.response.Response;
import com.bangguddle.ownbang.global.response.SuccessResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("agents/reservations")
@RequiredArgsConstructor // 의존성 주입: 생성자 주입을 임의의 코드없이 자동으로 설정
public class AgentReservationController {
    private final ReservationService reservationService;

    // 예약 확정
    @PatchMapping("/{id}")
    public ResponseEntity<Response<NoneResponse>> confirmStatusReservation(@PathVariable(name="id") Long id) {
        SuccessResponse<NoneResponse> response = reservationService.confirmStatusReservation(id);
        return Response.success(response);
    }
    // 예약 조회
    @GetMapping
    public ResponseEntity<Response<ReservationListResponse>> getAgentReservations(@RequestParam(name="agentId") Long agentId) {
        SuccessResponse<ReservationListResponse> response = reservationService.getAgentReservations(agentId);
        return Response.success(response);
    }

}
