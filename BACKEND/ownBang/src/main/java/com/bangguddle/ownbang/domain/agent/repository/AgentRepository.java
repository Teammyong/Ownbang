package com.bangguddle.ownbang.domain.agent.repository;

import com.bangguddle.ownbang.domain.agent.entity.Agent;
import com.bangguddle.ownbang.global.enums.ErrorCode;
import com.bangguddle.ownbang.global.handler.AppException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AgentRepository extends JpaRepository<Agent, Long> {
    boolean existsByLicenseNumber(String licenseNumber);

    default Agent getByUserId(Long userId) {
        return findById(userId).orElseThrow(()->new AppException(ErrorCode.ACCESS_DENIED));
    };
}
