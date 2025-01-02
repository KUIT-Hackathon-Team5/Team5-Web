import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column; // 자식 요소를 세로로 배치
    align-items: center; // 자식 요소를 수평 중앙 정렬 
    width: 393px;
    height: 853px;
    background-color: #f3f3f3;
`

export const LoginTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
    margin-top: 144px;
    margin-bottom: 100px;
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > button {
    margin-top: 42px; // ConfirmButton에 여백 추가
  }
`;

export const SignInDiv = styled.div`
    font-size: 14px;
    margin-top: 59px;
    text-decoration: underline;

`