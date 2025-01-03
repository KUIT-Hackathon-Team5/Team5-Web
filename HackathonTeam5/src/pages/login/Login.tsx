import React, { useState } from "react";
import UserInputField from "../../components/userInputField/UserInputField";
import {
  LoginContainer,
  LoginTitle,
  LoginForm,
  SignInDiv,
} from "./Login.styled";
import ConfirmButton from "../../components/button/confirmButton";
import kuzone from "../../assets/kuzone.png";
import Statusbar from "../../components/statusbar/Statusbar";
import Homebar from "../../components/homebar/Homebar";
import axios, { AxiosError } from "axios";

interface LoginResponse {
  status: number;
  message: string;
  data: {
    token: string;
    userId: string;
  }
  timestamp: number;
}

interface ErrorResponse {
  status: number; // HTTP 상태 코드
  message: string; // 에러 메시지
  timestamp: number; // 에러 발생 시간 (밀리초)
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const requestLogin = () => {
    const data = {
      "email": email,
      "password": password
    }

    axios
      .post<LoginResponse>(
        `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users/login`,
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Status:", response.data.status);
        console.log("Message:", response.data.message);
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        if (error.response) {
          // 에러 응답이 있는 경우
          console.error("Error Status:", error.response.data.status);
          console.error("Error Message:", error.response.data.message);
          console.error("Error Timestamp:", error.response.data.timestamp);
        } else {
          // 기타 에러
          console.error("Unexpected Error:", error.message);
        }
      });
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    console.log("Email:", newEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    console.log("Password:", newPassword);
  };

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Login Attempted with:");
    console.log("Email:", email);
    console.log("Password:", password);
    requestLogin()
  };



  // const isButtonDisabled = !email || !password

  return (
    <LoginContainer>
      <Statusbar/>
      <LoginTitle>
        <img src={kuzone} alt="app title" />
      </LoginTitle>
      <LoginForm>
        <UserInputField
          label="이메일"
          value={email}
          id="email"
          type="email"
          placeholder="건국대학교 이메일을 입력하세요"
          onChange={handleEmailChange}
        />

        <UserInputField
          label="비밀번호"
          value={password}
          id="password"
          type="password"
          placeholder="8-16자 이내, 영문자+숫자의 조합"
          onChange={handlePasswordChange}
        />

        <ConfirmButton
          text="로그인 하기"
          width="323px"
          height="50px"
          fontSize="19px"
          backgroundcolor="#42D596"
          onClick={handleLogin}
        />
      </LoginForm>

      <SignInDiv>회원가입</SignInDiv>
      <Homebar />
    </LoginContainer>
  );
};

export default Login;
