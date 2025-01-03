import { useState } from "react";
import thumbnail from "../../assets/hackathon2.png";
import heart from "../../assets/heart.png";
import heartFilled from "../../assets/heart-filled.svg"; // 채워진 하트 이미지 추가
import {
  EventItemContainer,
  EventItemThumbnailWrapper,
  EventItemLikeBtn,
  EventItemThumbnail,
  EventItemInfoContainer,
  EventItemTitle,
  EventItemLocation,
} from "./EventItem.styled";

const EventItem = () => {
  const [isLiked, setIsLiked] = useState(false); // 하트 클릭 상태 관리

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 클릭 시 상태 반전
  };
  return (
    <EventItemContainer>
      <EventItemThumbnailWrapper>
        <EventItemThumbnail src={thumbnail} alt="게시물 썸네일" />
        <EventItemLikeBtn onClick={handleLikeClick}>
        <img
            src={isLiked ? heartFilled : heart} // 상태에 따라 이미지 변경
            alt="게시물 저장"
          />
        </EventItemLikeBtn>
      </EventItemThumbnailWrapper>

      <EventItemInfoContainer>
        <EventItemTitle>타이틀</EventItemTitle>
        <EventItemLocation>일시 장소</EventItemLocation>
      </EventItemInfoContainer>
    </EventItemContainer>
  );
};

export default EventItem;
