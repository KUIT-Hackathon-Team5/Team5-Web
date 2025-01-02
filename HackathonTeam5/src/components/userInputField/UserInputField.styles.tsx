import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  margin-top: 20px;
`;

export const UserInputLabel = styled.label`
  font-weight: bold;
  font-size: 16px;
`;

export const InputWrapper = styled.div`
  position: relative; /* UserInput과 AuthButtonWrapper의 위치를 조정하기 위해 필요 */
  width: fit-content; /* 부모의 크기를 입력 필드에 맞춤 */
  display: flex;
`;

export const UserInput = styled.input`
  width: 323px;
  height: 20px;
  border-radius: 30px;
  border: 1px solid #afb1b6;
  padding: 12px;
  font-size: 16px;
  margin-top: 8px;
`;

export const AuthCodeButton = styled.button`
  position: absolute;
  right: 6px; /* UserInput 내부에서 오른쪽 간격 */
  font-weight: 500;
  top: 14px;
  width: 83px;
  height: 34px;
  border: 1px solid #42D596;
  color: #42D596;
  border-radius: 20px;
  font-size: 12px;
  background-color: white;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:disabled {
    color: #000000;
    border: 1px solid #000000;
    cursor: not-allowed;
  }
`;
