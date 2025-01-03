import React from "react";

// height는 27.5
import { Container } from "./Homebar.styles";

// Props 타입 정의 (TypeScript 환경일 경우)
type HomebarProps = {
  bgColor?: string; // bgColor는 선택적 속성으로 지정
};

const Homebar: React.FC<HomebarProps> = ({ bgColor }) => {
  return (
    <Container bgColor={bgColor}>
      <div className="bar"></div>
    </Container>
  );
};

export default Homebar;
