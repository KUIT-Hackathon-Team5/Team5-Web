import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 351px;
  height: 38px;
  padding: 16px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  // 두 번째 자식을 타겟팅
  & > :nth-child(2) {
    margin: 0;
  }
`;

export const ButtonWrapper = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background: none; /* 기본 버튼 스타일 제거 */
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer; /* 버튼으로 인식 가능하도록 커서 변경 */
`;

export const CircleImage = styled.img`
  position: absolute;
  top: 0;
  left: -25%;
  width: 40px;
  height: 40px;
  z-index: 1;
`;

export const PlusImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px;
  height: 16px;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const UploadCircleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 38px;
  height: 38px;
  z-index: 1;
`;

export const UploadArrowImage = styled.img`
  position: absolute;
  top: 50%;
  left: 73%;
  width: 16px;
  height: 16px;
  transform: translate(-50%, -50%);
  z-index: 2;
`;
