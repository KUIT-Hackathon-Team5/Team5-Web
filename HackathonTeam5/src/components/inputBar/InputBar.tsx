import React, { useState } from "react";
import Circle from "../../assets/circle.svg";
import Plus from "../../assets/plus.svg";
import UploadCircle from "../../assets/uploadButton_circle.svg";
import UploadArrow from "../../assets/uploadButton_arrow.svg";
import { Container, ButtonWrapper, CircleImage, PlusImage, UploadCircleImage, UploadArrowImage } from "./InputBar.styled";
import UserInputField from "../userInputField/UserInputField";

const InputBar = () => {
  const [comment, setComment] = useState(""); // 사용자 입력 값을 관리하는 state

  return (
    <Container>
      <ButtonWrapper>
        <CircleImage src={Circle} alt="green-circle" />
        <PlusImage src={Plus} alt="green-plus" />
      </ButtonWrapper>
      <UserInputField 
        width="255px"
        height="16px"
        type="text"
        id="댓글"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글입력"
      />
      <ButtonWrapper>
        <UploadCircleImage src={UploadCircle} alt="upload-circle" />
        <UploadArrowImage src={UploadArrow} alt="upload-image" />
      </ButtonWrapper>
    </Container>
  );
};

export default InputBar;
