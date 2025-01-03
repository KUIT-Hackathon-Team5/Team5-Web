import styled from "styled-components";

export const EventItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const EventItemThumbnailWrapper = styled.div`
  position: relative;
  width: 107px;
  height: 94px;
`;

export const EventItemThumbnail = styled.img`
  width: 107px;
  height: 94px;
  border-radius: 10px 10px 0 0;
`;

export const EventItemLikeBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;

  & > img {
    position: absolute;
    width: 13px;
    height: 13px;
    top: 9px;
    right: 9px;
  }
`;

export const EventItemInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    width: 107px;
    border-radius: 0 0 10px 10px;
`

export const EventItemTitle = styled.div`
    font-weight: 500;
    font-size: 12px;
    margin: 4px 6px 4px 6px;

`

export const EventItemLocation = styled.div`
    font-size: 12px;
    color: #555555;
    margin: 0px 6px 4px 6px;
`