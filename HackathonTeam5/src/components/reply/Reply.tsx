import React from "react";
import { Comment, Header, UserName, DateTime, Content, ImagesWrapper, Image } from "./Reply.styles";

interface ReplyProps {
  username: string; // 사용자 닉네임
  dateTime: string; // 입력 일자 및 시간
  content: string;  // 댓글 내용
  images?: string[]; // 이미지 URL 배열 (선택적)
}

const Reply: React.FC<ReplyProps> = ({ username, dateTime, content, images }) => {
  return (
    <Comment>
      <Header>
        <UserName>{username}</UserName>
        <DateTime>{dateTime}</DateTime>
      </Header>
      <Content>{content}</Content>
      {images && images.length > 0 && (
        <ImagesWrapper>
          {images.map((src, index) => (
            <Image key={index} src={src} alt={`이미지 ${index + 1}`} />
          ))}
        </ImagesWrapper>
      )}
    </Comment>
  );
};

export default Reply;
