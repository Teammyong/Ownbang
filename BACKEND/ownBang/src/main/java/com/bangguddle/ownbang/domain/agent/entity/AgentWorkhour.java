package com.bangguddle.ownbang.domain.agent.entity;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Table(name = "agent_workhour", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"agent_id", "day"})
})
public class AgentWorkhour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "agent_workhour_id", nullable = false, columnDefinition = "INT UNSIGNED")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "agent_id", nullable = false)
    private Agent agent;

    @Column(nullable = false, columnDefinition = "ENUM('MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN')")
    @Enumerated(EnumType.STRING)
    private Day day;

    @Column(name = "start_time", nullable = false, columnDefinition = "TIME")
    private String startTime;

    @Column(name = "end_time", nullable = false, columnDefinition = "TIME")
    private String endTime;

    @Builder
    public AgentWorkhour(Agent agent, Day day, String startTime, String endTime) {
        this.agent = agent;
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    public enum Day {
        WEEKEND, WEEKDAY
    }

    public void updateWorkhour(Day day, String startTime, String endTime) {
        this.day = day;
        this.startTime = startTime;
        this.endTime = endTime;
    }
}
