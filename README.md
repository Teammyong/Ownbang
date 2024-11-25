# 🏠 온:방 (온라인 부동산 거래 서비스)

## 👇온방 소개 및 시연 영상👇

[![Video Label](http://img.youtube.com/vi/Q09tYZwY7lc/0.jpg)](https://youtu.be/Q09tYZwY7lc)

## 요약

타 지역에 집을 구해야 하거나 빠르게 집을 구해야 하는 당신!    
직접 매물을 보러가기 어려워 집을 구하는 과정이 힘들었나요?    
**온방** 이 제공하는 화상통화를 이용하여 간편하게 매물을 확인해보세요!

## 💻 온방 서비스 화면

### 메인 페이지

![메인페이지](/ReadMeImages/메인페이지.PNG)

### 매물 검색 페이지

![검색페이지](/ReadMeImages//검색페이지.gif)

### 매물 정보 / 예약 신청 페이지

![매물정보/예약페이지](/ReadMeImages/매물%20상세%20및%20예약%20페이지.gif)

### 매물 등록 페이지

![매물등록](/ReadMeImages/매물등록.png)

### 마이페이지 - 일반 유저

![일반유저마이페이지](/ReadMeImages//일반유저마이페이지.gif)

### 마이페이지 - 중개인 유저

![중개인유저마이페이지](/ReadMeImages/중개인마이페이지.gif)

### 중개인 전환 신청 페이지

![중개인전환신청페이지](/ReadMeImages/중개인전환신청페이지.PNG)

### 회원가입 및 로그인

![회원가입](/ReadMeImages/회원가입.PNG)
![로그인](/ReadMeImages/로그인.png)

### 화상통화 페이지

### 녹화 다시보기 페이지

![다시보기](/ReadMeImages/다시보기.gif)

## ✨ 주요 기능

- 서비스 설명 :
- 주요 기능 :
  - webRTC를 통한 실시간 화상 통화를 이용한 부동산 매물 확인
  - 지역 검색을 통한 지도 위 매물 개수 및 정보 확인

### 🔎 개발 환경

---

💻 **BackEnd**

- Spring boot jpa
- mySQL
- Redis
- Elastic Search

💻 **FrontEnd**

- React

💻 **Web RTC**

- openvidu
- webRTC

💻 **CI/CD**

- docker
- nginx
- SSL
- Ubuntu
- AWS EC2
- AWS S3

### 👨‍👩‍👧 협업 툴

---

- Git
- Jira
- Notion
- Mattermost
- Discord
- Figma

### 🏛️ 시스템 아키텍처

---

![alt text](/ReadMeImages/아키텍처.png)


### ✨Jenkins를 이용한 CD 구축 및 SSL 인증서 적용

---



### ✨기술 특이점

---
- WebRTC (Openvidu)

Openvidu로만 할 수 있는 기능 뿐만이 아니라 백엔드를 함께 이용한 개발로 여러 기능을 구현했습니다. 각 방마다 인원수가 6명까지만 들어갈 수 있게 구현하였고, 방장만 게임을 시작할 수 있기에 방을 만들거나 방에서 인원이 나가면 자동으로 다른 사람에게 방장 권한이 부여되게 하였습니다. 그리고 private 방을 만들 수 있게 하여 방 번호와 비밀번호를 아는 사용자 외에는 들어오지 못하게 구현하였고, 빠른 시작 기능을 구현하여 현재 존재하는 방에 빠르게 입장할 수 있게 하였고, 방이 없으면 자동으로 방 생성까지 할 수 있도록 구현하였습니다.

- Redis

랭킹 기능에 들어가는 랭킹 정보는 자정마다 업데이트 되는 정보여서 단순한 구조의 정보이고, 반복적으로 동일하게 제공되고, 최신화가 실시간으로 필요하지 않은 정보였습니다. 이러한 데이터의 특성으로 캐싱을 적용하기에 적절하다고 생각을 했고, Redis에 랭킹 정보를 저장하여 DB를 거치지 않고 정보를 가져와 트래픽이 많아질 때 백엔드 부하를 줄이고, 정보 조회 속도를 높였습니다. 또한 저희는 Spring Scurity와 JWT를 이용하여 인증을 구현하였는데, Redis를 이용해 로그아웃시킨 토큰들을 만료처리하여 해당 토큰으로는 다시 인증할 수 없도록 구현하였습니다.

- redux-toolkit

프론트엔드 구현시에는 React와 redux-toolkit을 이용하여 Ducks Pattern 기반 상태 관리를 하였습니다.

- 배포

도커, Nginx, Jenkins를 이용한 자동 무중단 배포를 구현하였습니다. 백엔드를 도커 컨테이너로 배포하였고, 프론트로 Nginx와 함께 도커 컨테이너로 배포하였습니다.

### 💭요구사항 정의서

---

- 요구사항 정리 이미지

### 🎨 화면 설계서

---

![피그마1](/ReadMeImages/피그마-1.PNG)
![피그마2](/ReadMeImages/피그마-2.PNG)
![피그마3](/ReadMeImages/피그마-3.PNG)
![피그마4](/ReadMeImages/피그마-4.PNG)

### ✨코드 컨벤션

---

---

### ✨Git 컨벤션

---

| 깃모지 | 커밋 유형   | 의미                                                         |
| ------ | ----------- | ------------------------------------------------------------ |
| ✨     | `Feat`      | 새로운 기능 추가                                             |
| 🐛     | `Fix`       | 버그 수정                                                    |
| 📝     | `Docs`      | 문서 수정                                                    |
| 💄     | `Style`     | 코드 formatting, 세미콜론 누락, 코드 자체의 변경이 없는 경우 |
| ♻️     | `Refractor` | 코드 리팩토링                                                |
| ✅     | `Test`      | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| 🙈     | `Chore`     | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| 📱     | `Design`    | CSS 등 사용자 UI 디자인 변경                                 |
| 💡     | `Comment`   | 필요한 주석 추가 및 변경                                     |
| 🚚     | `Rename`    | 코드 리팩토링                                                |
| 🔥     | `Remove`    | 테스트 코드, 리팩토링 테스트 코드 추가                       |
| 🚑️    | `!HOTFIX`   | 패키지 매니저 수정, 그 외 기타 수정 ex) .gitignore           |
| 🔧     | `Config`    | CSS 등 사용자 UI 디자인 변경                                 |

- 커밋 유형 이후 **제목**과 **본문**은 한글로 작성하여 내용이 잘 전달될 수 있도록 할 것
- 본문 최상단에 **JIRA의 이슈 넘버 작성** [ex)#S11P12A702-177]
- 본문에는 변경한 내용과 이유 설명 (HOW보다는 WHAT & WHY를 설명)

### 💡Github Flow 브랜치 전략

---

- Git Flow 진행 방식

  1. feature 브랜치가 완성되면 `(front or back)/master` 브랜치로 merge request를 통해 merge한다.

     ⇒ merge request가 요청되면, 모든 팀원들이 코드 리뷰를 하여 안전하게 merge한다.

  2. 매 주마다 `(front or back)/master` 브랜치를 master 브랜치로 병합하여 배포를 진행한다.

- feature 브랜치 이름 명명 규칙

  - (front or back)/(기능 내용)/(Jira 이슈 넘버)

  ex) front/Login/S11P12A702-177
  <br>
  ex) back/webRTC/S11P12A702-277

### 👨‍👩‍👧 Jira

---

협업 및 업무 관리, 업무 공유를 위해 `Jira`를 이용하였습니다.    
매주 월요일 한 주동안 진행되어야 할 주 단위의 계획을 구성하고, 매일 아침 당일에 할 이슈들을 스프린트에 등록하였습니다.    
스프린트는 일주일 단위로 나누어 진행하였습니다.

- Epic : 메인 기능을 위주로 나누어 작성하였습니다. (ex. 시스템 이용을 위한 회원관리 기능이 필요합니다.)
- story : `리프레시 토큰 재발급 요청`과 같이 자세하게 작성하였습니다.
- subtask : 부작업을 나누어 세세하게 업무 관리를 진행하였습니다.

### 👨‍👩‍👧 Notion

---

팀 전체에서 공유되어야 할 내용과, 공지되어야 하는 것을 모아 관리하였습니다.    
컨벤션 규칙, 브랜치 전략 등을 노션에 기록하여 필요할 때 언제든 확인할 수 있도록 관리했습니다.    
그리고 모든 회의와 피드백을 페이지로 생성하여 다시 찾아보기 용이하도록 구성하였습니다.

### 👨‍👩‍👧 Scrum

---

매일 아침 9시에 어제 완성한 `task`와 오늘 할 `task`를 각자 정리해서 5~10분 동안 서로 공유하는 시간을 가졌습니다.    
짧지만 매일 공유하는 시간을 가짐으로써 팀원들의 현재 진행 상황을 자세히 알 수 있었고 지속적으로 모니터링 하여 어려웠던 부분은 서로 도와가며 해결하였습니다.

### ✨ ER Diagram

---

![alt text](/ReadMeImages/ERD.png)

### ✨ EC2 포트 정리

---

| **PORT** |                        **이름**                         |
| :------: | :-----------------------------------------------------: |
|   443    |                          HTTPS                          |
|    80    | HTTP - HTTPS로 리다이렉트(프론트 페이지지로 리다이렉트) |
|   8443   |                        Openvidu                         |
|   8379   |                          Redis                          |
|   3306   |                          MySQL                          |
|   8081   |                         Jenkins                         |
|   8080   |              Spring boot Docker Container               |
|   3000   |              React, NginX Docker Container              |

### 😃 팀원 역할

---

<table>
  <tr>
    <td align="center"><a href="https://github.com/wnso-kim"> 김준영</a></td>
    <td align="center"><a href="https://github.com/seoyoung059"> 김서영</a></td>
    <td align="center"><a href="https://github.com/iltae">김일태 </a></td>
    <td align="center"><a href="https://github.com/sjhlko"> 서정희 </a></td>
    <td align="center"><a href="https://github.com/eug2n2"> 오유진</a></td>
    <td align="center"><a href="https://github.com/242lee"> 이소희</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/wnso-kim"><img src="https://github.com/wnso-kim.png" width="100px;" alt=""/></a></td>
    <td align="center"><a href="https://github.com/seoyoung059"><img src="https://github.com/seoyoung059.png" width="100px;" alt=""/></a></td>
    <td align="center"><a href="https://github.com/iltae"><img src="https://github.com/iltae.png" width="100px;" alt=""/></a></td>
    <td align="center"><a href="https://github.com/sjhlko"><img src="https://github.com/sjhlko.png" width="100px;" alt=""/></a></td>
    <td align="center"><a href="https://github.com/eug2n2"><img src="https://github.com/eug2n2.png" width="100px;" alt=""/></a></td>
        <td align="center"><a href="https://github.com/242lee"><img src="https://github.com/242lee.png" width="100px;" alt=""/></a></td>
  </tr>
  <tr>
    <td align="center">팀장 / BE</td>
    <td align="center">BE</td>
    <td align="center">FE</td>
    <td align="center">BE</td>
    <td align="center">BE</td>
    <td align="center">FE</td>
  </tr>
</table>
<br/>

### 온방을 개발하고 난 후의 회고

---

- 안되는 것은 함께 해결하면 해결할 수 있다.
- 코드 리뷰 꼼꼼히 하자
- 긍정적인 말로 팀 분위기를 만들어가자
- 문서화를 잘 하자!
