import styled from "styled-components"

export const OnboardingContainer = styled.div`
    display: flex;
    flex-direction: column; // 자식 요소를 세로로 배치
    align-items: center; // 자식 요소를 수평 중앙 정렬 
    justify-content: center; // 자식 요소를 수직 중앙 정렬
    width: 393px;
    height: 853px;
    background-color: #42D596;
`

export const OnboardingTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
`

export const OnboardingSubtitle = styled.div`
    font-size: 16px;
    padding-top: 30px;
`