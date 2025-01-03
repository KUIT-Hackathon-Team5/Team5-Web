import thumbnail from "../../assets/thumbnail.png";
import heart from "../../assets/heart.png";
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
  return (
    <EventItemContainer>
      <EventItemThumbnailWrapper>
        <EventItemThumbnail src={thumbnail} alt="게시물 썸네일" />
        <EventItemLikeBtn>
          <img src={heart} alt="게시물 저장" />
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
