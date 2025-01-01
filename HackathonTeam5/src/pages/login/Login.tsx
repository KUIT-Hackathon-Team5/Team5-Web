import React, { useState } from "react";
import UserInputField from "../../components/userInputField/UserInputField";
import { LoginContainer, LoginTitle, LoginForm, SignInDiv } from "./Login.styled";
import ConfirmButton from "../../components/button/confirmButton";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const handleLogin = () => {
    console.log("Login Attempted with:");
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <LoginContainer>
      <LoginTitle>KU:ZONE</LoginTitle>
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
    </LoginContainer>
  );
};

export default Login;
