import React from "react";
import { StyledConfirmButton } from "./confirmButton.styled";

interface ConfirmButtonProps {
  text: string; // 버튼 텍스트
  width: string; // 버튼 너비
  height: string; // 버튼 높이
  fontSize: string; // 폰트 크기
  backgroundcolor: string; // 버튼 배경색
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // 클릭 핸들러
}

const ConfirmButton = (props: ConfirmButtonProps) => {
  return (
    <StyledConfirmButton
      width={props.width}
      height={props.height}
      fontSize={props.fontSize}
      backgroundcolor={props.backgroundcolor}
      onClick={props.onClick}
    >
      {props.text}
    </StyledConfirmButton>
  );
};

export default ConfirmButton;