import styled from "styled-components"

const OnboardingContainer = styled.div`
    display: flex;
    flex-direction: column; // 자식 요소를 세로로 배치
    align-items: center; // 자식 요소를 수평 중앙 정렬 
    justify-content: center; // 자식 요소를 수직 중앙 정렬
    width: 393px;
    height: 853px;
    background-color: #f3f3f3;
`

const OnboardingTitle = styled.div`
    font-size: 25px;
    font-weight: bold;
`

const OnboardingSubtitle = styled.div`
    font-size: 16px;
    padding-top: 30px;
`

export default { OnboardingContainer, OnboardingTitle, OnboardingSubtitle };