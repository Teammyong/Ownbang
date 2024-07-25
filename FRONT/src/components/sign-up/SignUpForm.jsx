import * as React from "react";
import {
  CssBaseline,
  Button,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";

import { useTheme } from "@mui/material";

// 화면 하단에 사용하는 copyright인데 맨 아래 코드를 비활성화 시켜둠.
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="theme.palette.text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        OwnBang-SSAFYA702
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// 회원가입 폼
const SignUp = () => {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      userId: data.get("userId"),
      password: data.get("password"),
      userName: data.get("userName"),
      userPhoneNumber: data.get("userPhoneNumber"),
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <></>
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <TextField
                label="아이디"
                name="userId"
                id="userId"
                required
                fullWidth
                autoFocus
              />
              {/* 아이디 입력 란 하단에 위치한 안내 문구 */}
              <Typography
                name="idNotice"
                style={{
                  fontSize: theme.fontSize.small,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                4~ 20 자리 영어, 숫자, 특수문자
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="비밀번호"
                name="password"
                type="password"
                id="password"
                required
                fullWidth
              />
              {/* 비밀번호 입력 란 하단에 위치한 안내 문구 */}
              <Typography
                name="pwNotice"
                style={{
                  fontSize: theme.fontSize.small,
                  marginTop: 10,
                  marginLeft: 10,
                }}
              >
                9~16자리 영문 대소문자, 숫자, 특수문자 조합
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="이름"
                id="userName"
                name="userName"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="휴대폰번호"
                id="userPhoneNumber"
                name="userPhoneNumber"
                required
                fullWidth
              />
            </Grid>
          </Grid>
          <></>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 4, mb: 2, height: "50px" }}
            style={{ backgroundColor: theme.palette.primary.main }}
          >
            회원가입 하기
          </Button>
        </Box>
      </Box>
      {/* <Copyright sx={{ mt: 5 }} /> */}
    </Container>
  );
};

export default SignUp;
