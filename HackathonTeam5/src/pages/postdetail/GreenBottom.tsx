import React from 'react';
import { StyledDiv } from './GreenBottom.styles';
import Bird from "../../assets/bird.svg";

const GreenBottom = () => {
  const handleClick = () => {
    // 버튼 클릭 시 동작할 코드 (예: 다른 페이지로 이동 등)
    console.log("버튼 클릭됨!");
  };

  return (
    <StyledDiv>
      <button className="container" onClick={handleClick}>
        <img src={Bird} alt="새" />
        <p>반응 둘러보기</p>
      </button>
      <div className="sub">학우들이 남긴 기대평과 분위기를 미리 확인하세요!</div>
    </StyledDiv>
  );
};

export default GreenBottom;
