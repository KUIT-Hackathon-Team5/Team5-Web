import React, { useState } from "react";
import ConfirmButton from "../../components/button/confirmButton";
import UserInputField from "../../components/userInputField/UserInputField";
import { SignUpContainer, SignUpForm } from "./Signup.styled";
import Statusbar from "../../components/statusbar/Statusbar";

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

  const handleSignUp = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("SignUp Attempted with:");
    console.log("Email:", email);
    console.log("AuthCode:", authCode);
    console.log("Password:", password);
  };

  const handleSendAuthCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("HandleSendAuthCode");
  };

  const handleConfirmAuthCode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("HandleConfirmAuthCode");
  }

  const isSignUpButtonDisabled =
    !email ||
    !authCode ||
    !password ||
    !confirmedPassword ||
    password !== confirmedPassword;

  const isSendAuthCodeButtonDisabled = !email


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
