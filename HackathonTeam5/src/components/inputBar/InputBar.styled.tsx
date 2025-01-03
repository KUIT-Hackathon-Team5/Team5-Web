import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 351px;
  height: 38px;
  padding: 16px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 40px; /* Circle 이미지 크기 */
  height: 40px;
`;

export const CircleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

export const PlusImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px; /* 십자가 크기 */
  height: 16px;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  z-index: 2; /* Circle 위에 위치 */
`;

export const ImageWrapper2 = styled.div`
  position: relative;
  width: 40px; /* UploadCircle 이미지 크기 */
  height: 40px;
`;

export const UploadCircleImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1; /* 배경 이미지 */
`;

export const UploadArrowImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 16px; /* 화살표 크기 */
  height: 16px;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  z-index: 2; /* UploadCircle 위에 위치 */
`;