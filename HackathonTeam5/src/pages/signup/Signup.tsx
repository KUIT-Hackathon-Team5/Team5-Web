import React, { useState } from "react";
import ConfirmButton from "../../components/button/confirmButton";
import UserInputField from "../../components/userInputField/UserInputField";
import { SignUpContainer, SignUpForm } from "./Signup.styled";
import Statusbar from "../../components/statusbar/Statusbar";
import axios, { AxiosError } from "axios";

// 회원가입 버튼 눌렀을 때
interface UserRegisterResponse {
  status: number; // 응답 상태 코드
  message: string; // 응답 메시지
  data: {
    userId: number; // 사용자 ID
  };
  timestamp: number; // 타임스탬프 (밀리초 단위)
}

// 인증번호 발송 버튼 눌렀을 때(POST요청)
interface RequestAuthCodeResponse {
  status: number;
  message: string;
  timestamp: number;
}

// 인증번호 확인 눌렀을 때(GET요청)
interface VerifyAuthCodeResponse {
  status: number;
  message: string;
  data: {
    verified: boolean;
  };
  timestamp: number;
}

interface ErrorResponse {
  status: number; // HTTP 상태 코드
  message: string; // 에러 메시지
  timestamp: number; // 에러 발생 시간 (밀리초)
}

const Signup = () => {
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    console.log("Email:", newEmail);
  };

  const handleAuthCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAuthCode = e.target.value;
    setAuthCode(newAuthCode);
    console.log("newAuthCode:", newAuthCode);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    console.log("Password:", newPassword);
  };

  const handleConfirmedPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newConfirmedPassword = e.target.value;
    setConfirmedPassword(newConfirmedPassword);
    console.log("ConfirmedPassword:", newConfirmedPassword);
  };

  // 회원가입 처리
  const axios_register = () => {
    const data = {
      email: email,
      password: password,
    };

    axios
      .post<UserRegisterResponse>(
        `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users/register`,
        data
      )
      .then((response) => {
        console.log(response);
        console.log("Status:", response.data.status);
        console.log("Message:", response.data.message);
        console.log("User ID:", response.data.data.userId);
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
  };

  // 인증번호 요청
  const requestAuthCode = () => {
    const data = {
      email: email,
    };  

    axios
      .post<RequestAuthCodeResponse>(
        `/users/emails/verification-requests`,
        data
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
  };

  // 인증번호 확인
  const verifyAuthCode = () => {
    const endpoint = `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users/emails/vertifications`;

    axios
      .get<VerifyAuthCodeResponse>(
        `${endpoint}?email=${encodeURIComponent(email)}&code=${encodeURIComponent(authCode)}`
      )
      .then((response) => {
        console.log("Response:", response.data);
        console.log("Status:", response.data.status);
        console.log("Message:", response.data.message);
        console.log("Verified:", response.data.data.verified);
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        if (error.response) {
          console.error("Error Status:", error.response.data.status);
          console.error("Error Message:", error.response.data.message);
          console.error("Error Timestamp:", error.response.data.timestamp);
        } else {
          console.error("Unexpected Error:", error.message);
        }
      });
  };

  /// 버튼의 onClick에 넘길 메서드들
  // 인증번호 발송
  const handleSendAuthCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("HandleSendAuthCode");
    requestAuthCode();
  };

  // 인증번호 확인
  const handleConfirmAuthCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("HandleConfirmAuthCode");
    verifyAuthCode();
  };

  // 회원가입 요청
  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("SignUp Attempted with:");
    console.log("Email:", email);
    console.log("AuthCode:", authCode);
    console.log("Password:", password);
    axios_register();
  };

  const isSignUpButtonDisabled =
    !email ||
    !authCode ||
    !password ||
    !confirmedPassword ||
    password !== confirmedPassword;

  const isSendAuthCodeButtonDisabled = !email;

  return (
    <SignUpContainer>
      <Statusbar></Statusbar>
      <h2>회원가입</h2>

      <SignUpForm>
        <UserInputField
          label="이메일"
          value={email}
          id="email"
          type="email"
          placeholder="건국대학교 이메일을 입력하세요"
          onChange={handleEmailChange}
          buttonText="인증코드 발급"
          onButtonClick={handleSendAuthCode}
          disabled={isSendAuthCodeButtonDisabled}
        />

        <UserInputField
          label="인증번호"
          value={authCode}
          id="authCode"
          type="number"
          placeholder="인증번호 입력"
          onChange={handleAuthCodeChange}
          buttonText="인증확인"
          onButtonClick={handleConfirmAuthCode}
          disabled={isSendAuthCodeButtonDisabled}
        />

        <UserInputField
          label="비밀번호"
          value={password}
          id="password"
          type="password"
          placeholder="8~16자 이내, 영문자+숫자의 조합"
          onChange={handlePassword}
        />

        <UserInputField
          label="비밀번호 확인"
          value={confirmedPassword}
          id="confirmedPassword"
          type="password"
          placeholder="비밀번호 확인"
          onChange={handleConfirmedPassword}
        />

        <ConfirmButton
          text="회원가입 하기"
          width="323px"
          height="50px"
          fontSize="19px"
          backgroundcolor="#42D596"
          onClick={handleSignUp}
          disabled={isSignUpButtonDisabled}
        />
      </SignUpForm>
    </SignUpContainer>
  );
};

export default Signup;
