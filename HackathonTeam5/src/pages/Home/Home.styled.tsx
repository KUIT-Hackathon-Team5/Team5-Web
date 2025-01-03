import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f3f3f3;
  align-items: center; // 자식 요소를 수평 중앙 정렬
  width: 393px;
  height: 853px;
  border: 1px solid #42d596;
  overflow-y: auto; // 세로 스크롤 활성화
  overflow-x: hidden; // 가로 스크롤 숨김
  box-sizing: border-box;
  position: relative;

  /* 스크롤바 스타일 숨기기 */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none; /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge */
`;

export const PopularEventsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 20px;
  margin-top: 10px;
  width: 100%; 

  & > p {
    font-weight: 600;
    font-size: 14px;
  }
`;

export const PopularEventsList = styled.div`
  display: flex;
  gap: 16px;

  overflow-y: hidden;
  overflow-x: auto;
  width: 100%;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none; /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge */
`;

export const FilterButton = styled.button`
  display: flex;
  gap: 10px;
  align-self: flex-end;
  align-items: center;
  margin-right: 20px;
  background: none;
  border: none;
  cursor: pointer;

  & > p {
    font-size: 14px;
    color: #555555;
  }

  & > img {
    width: 20px;
    height: 20px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 80px;
`;

export const ConfirmButtonWrapper = styled.div`
  position: fixed;
  bottom: 140px;
  z-index: 1000; // 다른 요소 위로 띄움
`;
