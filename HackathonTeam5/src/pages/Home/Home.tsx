import {
  HomeContainer,
  ListContainer,
  ConfirmButtonWrapper,
  PopularEventsList,
  PopularEventsContainer,
  FilterButton,
  CategoryButton,
  CategoryContainer,
} from "./Home.styled";
import PostItem from "../../components/postItem/PostItem";
import EventItem from "../../components/eventItem/EventItem";
import AppTitle from "../../components/title/AppTitle";
import ConfirmButton from "../../components/button/confirmButton";
import arrowDown from "../../assets/chevron-down.png";
import Statusbar from "../../components/statusbar/Statusbar";
import Homebar from "../../components/homebar/Homebar";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useRef, useEffect } from "react";

// Post 인터페이스
interface Post {
  postId: number;
  userId: number;
  title: string;
  contents: string;
  place: string;
  type: string;
  startTime: string; // ISO 8601 형식의 날짜 문자열
  endTime: string; // ISO 8601 형식의 날짜 문자열
  reportCount: number;
  createdDate: string; // ISO 8601 형식의 날짜 문자열
}

// Data 인터페이스
interface PostList {
  posts: Post[];
  popularPosts: Post[];
}

// 최종 응답 인터페이스
interface GetPostResponse {
  status: number;
  message: string;
  data: PostList;
  timestamp: number;
}

interface ErrorResponse {
  status: number; // HTTP 상태 코드
  message: string; // 에러 메시지
  timestamp: number; // 에러 발생 시간 (밀리초)
}

const Home = () => {
  const [activeButton, setActiveButton] = useState<"동아리" | "단과대">(
    "동아리"
  );
  const [category, setCategory] = useState<string>("동아리");
  const [postResponse, setPostResponse] = useState<PostList | null>(null);

  const handleCategoryButtonClick = (button: "동아리" | "단과대") => {
    // 유니온 타입, 변수 등이 여러 타입 중 하나를 가질 수 있음
    setCategory(button); // category 상태 업데이트
    setActiveButton(button);
    console.log(category);
  };

  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleCreatePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/createpost"); // 페이지 이동
    console.log("게시물 작성하기");
  };

  const GetPostRequest = () => {
    // const jwt = localStorage.getItem("jwt");

    axios
      .get<GetPostResponse>(
        `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/posts/view?category=${category}&order=0`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Status:", response.data.status);
        console.log("Message:", response.data.message);
        setPostResponse(response.data.data);
        // alert("게시글 조회 성공!!");
      })
      .catch((error: AxiosError<ErrorResponse>) => {
        if (error.response) {
          // 에러 응답이 있는 경우
          console.error("Error Status:", error.response.data.status);
          console.error("Error Message:", error.response.data.message);
          console.error("Error Timestamp:", error.response.data.timestamp);
        } else {
          // 기타 에러
          console.error("Unexpected Error:", error.message);
        }
      });
  };

  useEffect(() => {
    GetPostRequest();
  }, [category]);

  return (
    <HomeContainer>
      <Statusbar />
      <AppTitle />

      <CategoryContainer>
        <CategoryButton
          isactive={activeButton === "동아리"}
          onClick={() => handleCategoryButtonClick("동아리")}
        >
          동아리
        </CategoryButton>
        <CategoryButton
          isactive={activeButton === "단과대"}
          onClick={() => handleCategoryButtonClick("단과대")}
        >
          단과대 축제
        </CategoryButton>
      </CategoryContainer>

      <PopularEventsContainer>
        <p>인기 동아리 이벤트</p>
        <PopularEventsList>
          {postResponse?.popularPosts &&
          postResponse.popularPosts.length > 0 ? (
            postResponse.popularPosts.map((post) => (
              <EventItem
                key={post.postId}
                title={post.title}
                location={post.place}
              />
            ))
          ) : (
            <p>현재 인기 이벤트가 없습니다.</p>
          )}
        </PopularEventsList>
      </PopularEventsContainer>

      <FilterButton type="button">
        <p>최신순</p>
        <img src={arrowDown} alt="게시물 필터" />
      </FilterButton>

      <ListContainer>
        {postResponse?.posts.map((post) => (
          <PostItem
            key={post.postId} // 고유한 key로 postId 사용
            thumbnail="thumbnail" // 적절한 값을 전달해야 함
            category={post.type}
            title={post.title}
            time={new Date(post.startTime).toLocaleDateString()} // ISO 날짜를 로컬 날짜 형식으로 변환
            location={post.place}
            body={post.contents}
          />
        ))}
      </ListContainer>

      <ConfirmButtonWrapper>
        <ConfirmButton
          text="게시물 작성하기"
          width="353px"
          height="55px"
          fontSize="20px"
          backgroundcolor="#42D596"
          onClick={handleCreatePost}
        />
      </ConfirmButtonWrapper>

      <Homebar isSticky={true} />
    </HomeContainer>
  );
};

export default Home;
