import styled from 'styled-components';

// styled-components에서 props 타입 명시
interface ContainerProps {
  bgColor?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  width: 139px;
  height: 5px;
  padding: 13px 127px 9.496px 127px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  position: absolute;
  bottom: 0;
  background-color: ${({ bgColor }) => bgColor || 'transparent'}; /* 기본값은 transparent */
  
  .bar {
    width: 139px;
    height: 5px;
    flex-shrink: 0;
    border-radius: 100px;
    background: #000;
  }
`;