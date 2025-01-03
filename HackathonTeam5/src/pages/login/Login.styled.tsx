import styled from 'styled-components'

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column; // 자식 요소를 세로로 배치
    align-items: center; // 자식 요소를 수평 중앙 정렬 
    width: 393px;
    height: 853px;
    border: 1px solid #42D596;
    position: relative;
`

export const LoginTitle = styled.div`
    margin-top: 104px;
    margin-bottom: 100px;
    width: 153px;
    height: 37px;
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