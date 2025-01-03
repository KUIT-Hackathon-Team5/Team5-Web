import styled from "styled-components";

export const CreatePostContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 393px;
  height: 813px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
`;

export const PostContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

export const UsageGuideContainer = styled.div`
  width: 353px;
  height: 170px;
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

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 13px 20px;
    align-items: center;
    box-sizing: border-box;
    width: 393px;
`

export const UsageGuideConfirmBtnContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  align-items: center;
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
  margin-top: 10px;
`;

export const ConfirmButtonWrapper = styled.div`
    margin-top: 40px;
`



export const ToggleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleLabel = styled.span`
  font-size: 14px;
  margin-right: 10px;
`;

export const ToggleSwitch = styled.div<{ isOn: boolean }>`
  width: 40px;
  height: 15px;
  background-color: ${(props) => (props.isOn ? "#42D596" : "#ccc")};
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const ToggleThumb = styled.div<{ isOn: boolean }>`
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: ${(props) => (props.isOn ? "calc(100% - 12px)" : "2px")};
  transform: translateY(-50%);
  transition: left 0.3s ease;
`;
