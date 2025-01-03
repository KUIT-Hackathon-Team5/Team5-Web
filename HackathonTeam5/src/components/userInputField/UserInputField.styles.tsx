import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column; // 자식 요소를 세로로 배치
    margin-top: 20px;
`

export const UserInputLabel = styled.label`
    font-weight: bold;
    font-size: 16px;
`

export const UserInput = styled.input`
    width: 323px;
    height: 25px;
    border-radius: 30px;
    border: 1px solid #AFB1B6;
    padding: 12px;
    font-size: 16px;
    margin-top: 8px;
`
