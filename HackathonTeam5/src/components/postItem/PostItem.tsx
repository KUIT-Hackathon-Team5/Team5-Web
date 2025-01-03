import React from "react";
import { useState } from "react";
import {
  PostItemContainer,
  PostBody,
  PostCategory,
  PostItemContents,
  PostItemThumbnail,
  PostScheduleInfo,
  PostTitle,
} from "./PostItem.styled";
import thumbnail from "../../assets/hackathon.jpg"
import heart from "../../assets/heart.png"
import heartFilled from "../../assets/heart-filled.svg"; // 채워진 하트 이미지 추가
interface PostItemProps {
  thumbnail: string;
  category: string;
  title: string;
  time: string;
  location: string;
  body: string;
}

const PostItem = (props: PostItemProps) => {

  const [isLiked, setIsLiked] = useState(false); // 하트 클릭 상태 관리

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 클릭 시 상태 반전
  };

  return (
    <PostItemContainer>
      <PostItemThumbnail src={thumbnail} alt="이미지" />

      <PostItemContents>
        <PostCategory>
          <div>{props.category}</div>
          <button type="button" onClick={handleLikeClick}>
          <img
              src={isLiked ? heartFilled : heart} // 상태에 따라 이미지 변경
              alt="게시글 저장"
            />
          </button>
        </PostCategory>
        <PostTitle>
            {props.title}
        </PostTitle>
        <PostScheduleInfo>
            <div>{props.time}</div>
            <span>&nbsp;|&nbsp;</span>
            <div>{props.location}</div>
        </PostScheduleInfo>
        <PostBody>
            {props.body}
        </PostBody>
      </PostItemContents>
    </PostItemContainer>
  );
};

export default PostItem;
