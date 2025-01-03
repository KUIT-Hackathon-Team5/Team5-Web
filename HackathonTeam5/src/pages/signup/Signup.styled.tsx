import styled from "styled-components";

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // 자식 요소를 수평 중앙 정렬
  width: 393px;
  height: 853px;
  border: 1px solid #42D596;

  & > h2 {
    font-weight: bold;
    font-size: 20px;
    align-self: flex-start;
    margin-left: 20px;
    margin-top: 100px;
    margin-bottom: 30px;
  }
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center; // 자식 요소를 수평 중앙 정렬
  gap: 20px;

  & > button {
    margin-top: 80px;
  }
`;
