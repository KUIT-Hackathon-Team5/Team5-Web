import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import 추가
import {
  PostItemContainer,
  PostBody,
  PostCategory,
  PostItemContents,
  PostItemThumbnail,
  PostScheduleInfo,
  PostTitle,
} from "./PostItem.styled";
import thumbnail from "../../assets/hackathon.jpg";
import heart from "../../assets/heart.png";
import heartFilled from "../../assets/heart-filled.svg"; // 채워진 하트 이미지 추가

interface PostItemProps {
  thumbnail: string;
  category: string;
  title: string;
  time: string;
  location: string;
  body: string;
  categoryTitle: string;
  type: string;
  organizer: string;
  startTime: string;
  endTime: string;
  place: string;
  contents: string;
  organizer_link: string;
  images?: string[]; // 기본값 빈 배열
  postId: string; // 추가된 prop
}

const PostItem = (props: PostItemProps) => {
  const [isLiked, setIsLiked] = useState(false); // 하트 클릭 상태 관리
  const navigate = useNavigate(); // useNavigate 훅 사용

  const handleLikeClick = () => {
    setIsLiked(!isLiked); // 클릭 시 상태 반전
  };

  const handlePostClick = () => {
    // "/posts/:postId" 경로로 이동하며, 필요한 데이터를 전달
    navigate(`/posts/${props.postId}`, {
      state: {
        categoryTitle: props.categoryTitle,
        type: props.type,
        title: props.title,
        organizer: props.organizer,
        startTime: props.startTime,
        endTime: props.endTime,
        place: props.place,
        contents: props.contents,
        organizer_link: props.organizer_link,
        images: props.images || [],
        postId: props.postId,
      },
    });
  };

  return (
    <PostItemContainer onClick={handlePostClick}> {/* 클릭 이벤트 추가 */}
      <PostItemThumbnail src={thumbnail} alt="이미지" />

      <PostItemContents>
        <PostCategory>
          <div>{props.category}</div>
          <button
  type="button"
  onClick={(e) => {
    e.stopPropagation(); // 이벤트 전파 중단
    handleLikeClick(); // 좋아요 상태 변경
  }}
>
  <img
    src={isLiked ? heartFilled : heart} // 상태에 따라 이미지 변경
    alt="게시글 저장"
  />
</button>
        </PostCategory>
        <PostTitle>{props.title}</PostTitle>
        <PostScheduleInfo>
          <div>{props.time}</div>
          <span>&nbsp;|&nbsp;</span>
          <div>{props.location}</div>
        </PostScheduleInfo>
        <PostBody>{props.body}</PostBody>
      </PostItemContents>
    </PostItemContainer>
  );
};

export default PostItem;
