import React, { useState } from "react";
import {
  Container,
  CssBaseline,
  Box,
  Typography,
  Divider,
  Grid,
  TextField,
  InputAdornment,
  Button,
  IconButton,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import StatusChangeForm from "./StatusChangeForm";
import PasswordChangeForm from "./PasswordChangeForm";
import { useNavigate } from "react-router-dom";

/*
일단 페이지 하나에 컴퍼넌트 전환으로 바꿨는데 뒤로가기 거슬린다면
페이지 나눠야할수도 ?
*/

/*
데이터를 가져오는 부분에서 zustand에 메서드를 정의하고 여기서 가져와야할듯 ?
*/

// 더미데이터 - 데이터 연결 필요
const user = {
  userName: "김일태",
  phoneNumber: "010-1234-5678",
  userId: "iltae94@gmail.com",
  password: "password123",
};

export default function UserInfoEditForm() {
  const navigate = useNavigate();
  const theme = useTheme();
  // 유저 정보
  const [userInfo, setUserInfo] = useState(user);

  const [forAgent, setForAgent] = useState(false);
  const [forPassChange, setForPassChange] = useState(false);

  // 입력창에 있는 정보들을 userInfo에 반영
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  // 전화번호의 경우
  const handlePhoneNumberChange = (event) => {
    let formattedPhoneNumber = event.target.value.replace(/[^\d]/g, ""); // 숫자 이외의 문자 모두 제거

    // 전화번호 형식에 맞춰 '-' 기호 삽입
    if (formattedPhoneNumber.length > 3 && formattedPhoneNumber.length <= 7) {
      formattedPhoneNumber = formattedPhoneNumber.replace(
        /(\d{3})(\d{4})/,
        "$1-$2"
      );
    } else if (formattedPhoneNumber.length > 7) {
      formattedPhoneNumber = formattedPhoneNumber.replace(
        /(\d{3})(\d{4})(\d{4})/,
        "$1-$2-$3"
      );
    }

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      phoneNumber: formattedPhoneNumber,
    }));
  };

  const handleEdit = (props) => {
    setForAgent(props);
  };

  const handlePassChange = (props) => {
    setForPassChange(props);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 일단 출력 - 나중엔 api post
    console.log("유저 정보:", userInfo);
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        {!forAgent && !forPassChange ? (
          <Box
            sx={{
              mt: 8,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ mt: 12, pl: 2, fontWeight: theme.fontWeight.bold }}
              component="h1"
              variant="h5"
            >
              개인정보 변경
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textAlign: "end",
                fontSize: theme.fontSize.small,
                color: theme.palette.primary.main,
                "&:hover": {
                  textDecoration: "underLine",
                },
              }}
              onClick={() => setForAgent((prev) => !prev)}
            >
              중개인 회원 전환 신청
            </Typography>
            <Divider component="div" sx={{ mt: 1, width: "100%" }} />
            <Box component="form" noValidate sx={{ mt: 4 }}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField
                    label="이름"
                    id="userName"
                    name="userName"
                    value={userInfo.userName}
                    onChange={handleInputChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="휴대폰 번호"
                    type="text"
                    value={userInfo.phoneNumber}
                    onChange={(handleInputChange, handlePhoneNumberChange)}
                    placeholder="010-1234-5678"
                    inputProps={{
                      maxLength: 13, // 최대 입력 길이 설정 (예: 010-1234-5678)
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="아이디"
                    id="userId"
                    name="userId"
                    type="email"
                    fullWidth
                    value={userInfo.userId}
                    onChange={handleInputChange}
                  />
                </Grid>
              </Grid>
              <Grid>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 2,
                    textAlign: "end",
                    fontSize: theme.fontSize.small,
                    color: theme.palette.primary.main,
                    "&:hover": {
                      textDecoration: "underLine",
                    },
                  }}
                  onClick={() => setForPassChange((prev) => !prev)}
                >
                  비밀번호 변경
                </Typography>
              </Grid>
              <Grid
                item
                xs={8}
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                {/* 취소 버튼 클릭 시 어느 페이지로 이동할 지 */}
                <Button
                  variant="contained"
                  onClick={handleCancel}
                  sx={{
                    mt: 6,
                    mb: 2,
                    height: "50px",
                    width: "25%",
                    backgroundColor: theme.palette.action.disabled,
                  }}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  sx={{
                    mt: 6,
                    mb: 2,
                    height: "50px",
                    width: "25%",
                    backgroundColor: theme.palette.primary.main,
                  }}
                >
                  확인
                </Button>
              </Grid>
            </Box>
          </Box>
        ) : forPassChange ? (
          <PasswordChangeForm toggleEdit={handlePassChange} />
        ) : (
          <StatusChangeForm toggleEdit={handleEdit} />
        )}
      </Container>
    </>
  );
}