import styled from "styled-components";

interface ButtonProps {
  width: string;
  height: string;
  fontSize: string;
  backgroundcolor: string;
}

export const StyledConfirmButton = styled.button<ButtonProps>`
  border: none; // 기본 테두리 제거
  border-radius: 40px; // 둥근 모서리
  color: #ffffff; // 텍스트 색상
  cursor: pointer; // 마우스 포인터
  transition: background-color 0.3s ease, transform 0.2s ease; // 애니메이션

  width: ${(props) => props.width || "323px"}; // 기본값 설정
  height: ${(props) => props.height || "40px"};
  font-size: ${(props) => props.fontSize || "16px"};
  background-color: ${(props) => props.backgroundcolor || "#42D596"};

  // 비활성화 상태
  &:disabled {
    background-color: #c6c6c6;
    cursor: not-allowed;
  }
`;