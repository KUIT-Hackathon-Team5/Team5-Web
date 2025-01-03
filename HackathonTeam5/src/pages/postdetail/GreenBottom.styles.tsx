import styled from 'styled-components';

export const StyledDiv = styled.div`
  position: absolute;
  bottom: 27.5px;
  width: 393px;
  height: 66px;
  border-radius: 20px 20px 0px 0px;
  border: 2px solid var(--, #FFF);
  background-color: #42D596;
  cursor: pointer; /* 마우스 커서가 버튼으로 변경 */
  .container {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    gap: 5px;
    background: transparent; /* 배경을 투명하게 설정 */
    border: none; /* 기본 버튼 스타일 제거 */
    padding: 0; /* 기본 여백 제거 */
    img {
      margin-left: 130px;
      width: 16px;
      height: 16px;
      flex-shrink: 0;
    }
  
    p {
      margin: 0;
      padding: 0;
      width: auto;
      height: 21px;
      flex-shrink: 0;
      color: #FFF;
      text-align: center;
      font-size: 16px;
      font-style: normal;
      font-weight: 700;
    }
  }

  .sub {
    padding-left: 20px;
    padding-top: 6px;
    width: auto;
    height: 12px;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px; /* 133.333% */
  }
`;
