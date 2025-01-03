import React from 'react';
import { StyledDiv } from './GreenBottom.styles';
import Bird from "../../assets/bird.svg";

// GreenBottom 컴포넌트에서 onClick 함수를 props로 받아옴
interface GreenBottomProps {
  onClick: () => void;  // 클릭 시 실행할 함수 타입 정의
}

const GreenBottom: React.FC<GreenBottomProps> = ({ onClick }) => {
  return (
    <StyledDiv>
      <button className="container" onClick={onClick}>
        <img src={Bird} alt="새" />
        <p>반응 둘러보기</p>
      </button>
      <div className="sub">학우들이 남긴 기대평과 분위기를 미리 확인하세요!</div>
    </StyledDiv>
  );
};

export default GreenBottom;
