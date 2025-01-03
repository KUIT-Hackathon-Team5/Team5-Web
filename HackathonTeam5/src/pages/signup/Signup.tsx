import React, { useState } from "react";
import ConfirmButton from "../../components/button/confirmButton";
import UserInputField from "../../components/userInputField/UserInputField";
import { SignUpContainer, SignUpForm } from "./Signup.styled";
import Statusbar from "../../components/statusbar/Statusbar";
import axios, { AxiosError } from "axios";
import Homebar from "../../components/homebar/Homebar";

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
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
    console.log("닉네임:", newNickname);
  };

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
      name: nickname
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
        alert("회원가입 성공!!!!!!!!")
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

  // 닉네임 중복 확인
  const verifyNickname = () => {
    const data = {
      "name": nickname
    };

    axios
    .post<RequestAuthCodeResponse>(
      `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users/name`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json'
        },
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

  // 인증번호 요청
  const requestAuthCode = () => {
    const data = {
      "email": email,
    };

    axios
      .post<RequestAuthCodeResponse>(
        `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users/emails/verification-requests`,
        JSON.stringify(data),
        {
          headers: {
            'Content-Type': 'application/json'
          },
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
  };

  // 인증번호 확인
  const verifyAuthCode = () => {
    axios
      .get<VerifyAuthCodeResponse>(
        `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/users/emails/verifications?email=${encodeURIComponent(email)}&code=${encodeURIComponent(authCode)}`
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
  // 닉네임 중복확인
  const handleCheckNickname = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("HandleCheckNickname");
    verifyNickname()
  };

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

  const isPasswordValid = (password: string): boolean => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/;
    return regex.test(password);
  };

  const isSignUpButtonDisabled =
    !email ||
    !authCode ||
    !isPasswordValid(password) ||
    !isPasswordValid(confirmedPassword) ||
    password !== confirmedPassword;
  const isSendAuthCodeButtonDisabled = !email;
  const isCheckAuthCodeButtonDisabled = !authCode;

  const isNicknameValid = (nickname: string): boolean => {
    const regex = /^[가-힣]{4,12}$/;
    return regex.test(nickname);
  };
  const isNicknameCheckButtonDisabled = !isNicknameValid(nickname);

  return (
    <SignUpContainer>
      <Statusbar></Statusbar>
      <h2>회원가입</h2>

      <SignUpForm>
        <UserInputField
          label="닉네임"
          value={nickname}
          id="text"
          type="text"
          placeholder="4-12자 사이의 한글 닉네임"
          onChange={handleNicknameChange}
          buttonText="중복확인"
          onButtonClick={handleCheckNickname}
          disabled={isNicknameCheckButtonDisabled}
        />

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
          disabled={isCheckAuthCodeButtonDisabled}
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
      <Homebar />
    </SignUpContainer>
  );
};

export default Signup;
