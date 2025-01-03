import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 813px;
  background-color: white;
  position: relative;
`;

export const PostContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const UsageGuideContainer = styled.div`
  width: 353px;
  height: 162px;
  background-color: #e4e4e4;
  border-radius: 8px;
  padding: 10px;
  box-sizing: border-box;

  .usageGuideTitle {
    display: flex;
    align-items: center;
    margin-bottom: 7px;

    & > img {
      width: 20px;
      height: 20px;
      margin-right: 5px;
    }

    & > div {
      font-size: 12px;
      font-weight: 600;
    }
  }

  .usageGuideBold {
    font-size: 12px;
    font-weight: 600;
    margin-top: 7px;
  }

  .usageGuideMedium {
    font-size: 12px;
    font-weight: 400;
    margin-top: 7px;
  }
`;

export const UsageGuideConfirmBtnContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
  margin: 13px 20px 13px 0;
  gap: 5px;

  & > img {
    width: 15px;
    height: 15px;
  }

  & > div {
    font-size: 14px;
    
  }
`;

export const PostInputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 30px;
  margin-top: 20px;
`;

export const ConfirmButtonWrapper = styled.div`
    margin-top: 40px;
`
