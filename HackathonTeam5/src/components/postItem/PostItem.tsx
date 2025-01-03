import React from "react";
import {
  PostItemContainer,
  PostBody,
  PostCategory,
  PostItemContents,
  PostItemThumbnail,
  PostScheduleInfo,
  PostTitle,
} from "./PostItem.styled";
import thumbnail from "../../assets/thumbnail.png"
import heart from "../../assets/heart.png"

interface PostItemProps {
  thumbnail: string;
  category: string;
  title: string;
  time: string;
  location: string;
  body: string;
}

const PostItem = (props: PostItemProps) => {

  return (
    <PostItemContainer>
      <PostItemThumbnail src={thumbnail} alt="이미지" />

      <PostItemContents>
        <PostCategory>
          <div>{props.category}</div>
          <button type="button">
            <img src={heart} alt="게시글 저장" />
          </button>
        </PostCategory>
        <PostTitle>
            {props.title}
        </PostTitle>
        <PostScheduleInfo>
            <div>{props.time}</div>
            <div>" | "</div>
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
