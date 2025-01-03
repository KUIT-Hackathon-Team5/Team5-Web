import styled from "styled-components";

export const OnboardingContainer = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column; // 자식 요소를 세로로 배치
  align-items: center; // 자식 요소를 수평 중앙 정렬
  justify-content: center; // 자식 요소를 수직 중앙 정렬
  width: 393px;
  height: 786.5px;
  background-color: #42d596;
  color: white;
  position: relative; /* Statusbar의 절대 위치 기준 설정 */
`;

export const OnboardingTitle = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const OnboardingSubtitle = styled.div`
  font-size: 16px;
`;
