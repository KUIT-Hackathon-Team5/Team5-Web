import {
  HomeContainer,
  ListContainer,
  ConfirmButtonWrapper,
  PopularEventsList,
  PopularEventsContainer,
  FilterButton
} from "./Home.styled";
import HomeCategoryBar from "./HomeCategoryBar";
import PostItem from "../../components/postItem/PostItem";
import EventItem from "../../components/eventItem/EventItem";
import AppTitle from "../../components/title/AppTitle";
import ConfirmButton from "../../components/button/confirmButton";
import arrowDown from '../../assets/chevron-down.png'
import Statusbar from "../../components/statusbar/Statusbar";
import Homebar from "../../components/homebar/Homebar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  const handleCreatePost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    navigate("/createpost"); // 페이지 이동
    console.log("게시물 작성하기");
  };

  return (
    <HomeContainer>
      <Statusbar />
      <AppTitle />

      <HomeCategoryBar></HomeCategoryBar>

      <PopularEventsContainer>
        <p>인기 동아리 이벤트</p>
        <PopularEventsList>
          {[...Array(3)].map((_, index) => (
            <EventItem 
              key={index}
            />
          ))}
        </PopularEventsList>
      </PopularEventsContainer>

      <FilterButton type="button">
          <p>최신순</p>
          <img src={arrowDown} alt="게시물 필터" />
      </FilterButton>

      <ListContainer>
        {[...Array(10)].map((_, index) => (
          <PostItem
            key={index}
            thumbnail="thumbnail"
            category="스포츠"
            title="연극 동아리 공연합니다! 많은 참여 부탁드려요!"
            time="2025.03.10"
            location="건국대학교 공연홀"
            body="KU 연극 동아리에서 준비한 특별 공연! 이번 주제는 건국대학교 연극입니다!"
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

      <Homebar 
      isSticky={true}
      />
    </HomeContainer>
  );
};

export default Home;
