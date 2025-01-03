import styled from "styled-components";

export const Comment = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;

`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const UserName = styled.span`
  color: var(--3, #C6C6C6);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`;

export const DateTime = styled.span`
  color: var(--3, #C6C6C6);
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 116.667% */
`;

export const Content = styled.p`
  margin: 0;
  color: var(--1, #000);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
  overflow-x: auto; /* 가로 스크롤 활성화 */
   /* 스크롤바 스타일 숨기기 */
 ::-webkit-scrollbar {
    display: none;
  }

  /* Firefox */
  scrollbar-width: none; /* 스크롤바 숨기기 */
  -ms-overflow-style: none; /* IE, Edge */
`;

export const Image = styled.img`
  max-height: 169px; /* 최대 높이 */
  flex-shrink: 0; /* 이미지가 작아지지 않도록 설정 */
  border-radius: 8px; /* 이미지 모서리 둥글게 (선택 사항) */
  object-fit: cover; /* 이미지 비율 유지 */
`;


