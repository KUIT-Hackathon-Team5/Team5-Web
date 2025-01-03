import Statusbar from "../../components/statusbar/Statusbar";
import AppTitle from "../../components/title/AppTitle";
import {
  CreatePostContainer,
  PostContentsContainer,
  UsageGuideContainer,
  PostInputFieldContainer,
  UsageGuideConfirmBtnContainer,
  ConfirmButtonWrapper,
  ToggleButtonContainer,
  ToggleLabel,
  ToggleSwitch,
  ToggleThumb,
  BtnContainer,
} from "./CreatePost.styled";
import info from "../../assets/info.png";
import { useState } from "react";
import PostInputField from "../../components/postInputField/PostInputField";
import confirmbutton from "../../assets/confirmbutton.png";
import confirmedbutton from "../../assets/confirmedbutton.png";
import ConfirmButton from "../../components/button/confirmButton";
import Homebar from "../../components/homebar/Homebar";
import axios, { AxiosError } from "axios";

interface CreatePostResponse {
  status: number; // 응답 상태 코드
  message: string; // 응답 메시지
  data: {
    postId: number; // 사용자 ID
  };
  timestamp: number;
}

interface ErrorResponse {
  status: number; // HTTP 상태 코드
  message: string; // 에러 메시지
  timestamp?: number; // 에러 발생 시간 (선택적)
}

const CreatePost = () => {
  const [isOn, setIsOn] = useState(true);
  const [category, setCategory] = useState<string>("동아리");
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [startSchedule, setStartSchedule] = useState("");
  const [endSchedule, setEndSchedule] = useState("");
  const [location, setLocation] = useState("");
  const [postInfo, setPostInfo] = useState("");
  const [usageGuideConfirmed, setUsageGuideConfirmed] =
    useState<boolean>(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    setCategory((prev) => (prev === "동아리" ? "단과대" : "동아리"));
  };

  const handleTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setType(e.target.value);
    console.log(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    console.log(newTitle);
  };

  const handleOrganizationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrganization(e.target.value);
    console.log(e.target.value);
  };

  const handleStartScheduleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setStartSchedule(e.target.value);
    console.log(e.target.value);
  };

  const handleEndScheduleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndSchedule(e.target.value);
    console.log(e.target.value);
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
    console.log(e.target.value);
  };

  const handlePostInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostInfo(e.target.value);
    console.log(e.target.value);
  };

  const handleUsageGuideButton = () => {
    setUsageGuideConfirmed((prev) => !prev);
  };

  const uploadButtonDisabled =
    !type ||
    !title ||
    !organization ||
    !startSchedule ||
    !endSchedule ||
    !location ||
    !postInfo ||
    !usageGuideConfirmed;

  const uploadPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("handleCreatePost");
    createPostRequest();
  };

  const createPostRequest = () => {
    const jwt = localStorage.getItem("jwt");
    console.log(jwt);

    const data = {
      userId: localStorage.getItem("userId"),
      title: title,
      contents: postInfo,
      organizer: organization,
      organizer_link: "",
      place: location,
      photo: "",
      type: type,
      category: category,
      startTime: startSchedule,
      endTime: endSchedule,
    };

    axios
      .post<CreatePostResponse>(
        `http://ec2-3-39-86-18.ap-northeast-2.compute.amazonaws.com:8080/posts`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${jwt}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
        console.log("Status:", response.data.status);
        console.log("Message:", response.data.message);
        alert("게시글 업로드 성공!!");
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

  return (
    <CreatePostContainer>
      <Statusbar backgroundcolor="#42D596" />
      <AppTitle backgroundcolor="#42D596" />

      <PostContentsContainer>
        <UsageGuideContainer>
          <div className="usageGuideTitle">
            <img src={info} alt="" />
            <div>[게시판 이용안내]</div>
          </div>
          <div className="usageGuideMedium">
            다음과 같은 게시물은 이용이 제한됩니다.
          </div>
          <div className="usageGuideBold">
            - 주제와 무관한 내용, 광고, 비방, 불법적이거나 부적절한 글
          </div>
          <div className="usageGuideMedium">위반 시 조치:</div>
          <div className="usageGuideBold">- 게시물 삭제 및 이용 제한</div>
          <div className="usageGuideBold">
            - 심각한 경우 계정 정지 및 법적 조치
          </div>
          <div className="usageGuideMedium">
            게시글 작성 시, 위 내용에 동의하는 것으로 간주됩니다.
          </div>
        </UsageGuideContainer>

        <BtnContainer>
          <ToggleButtonContainer>
            <ToggleLabel>{category}</ToggleLabel>
            <ToggleSwitch isOn={isOn} onClick={handleToggle}>
              <ToggleThumb isOn={isOn} />
            </ToggleSwitch>
          </ToggleButtonContainer>

          <UsageGuideConfirmBtnContainer onClick={handleUsageGuideButton}>
            {usageGuideConfirmed ? (
              <img src={confirmedbutton} alt="" />
            ) : (
              <img src={confirmbutton} alt="" />
            )}
            <div>확인했습니다.</div>
          </UsageGuideConfirmBtnContainer>
        </BtnContainer>

        <PostInputFieldContainer>
          <PostInputField
            type="text"
            id="type"
            label="분야"
            value={type}
            placeholder="이벤트/부원 모집/정기 행사/공연 및 전시/홍보"
            onChange={handleTypeChange}
            width="300px"
            height="20px"
          />
          <PostInputField
            type="text"
            id="title"
            label="제목"
            value={title}
            placeholder=" 제목"
            onChange={handleTitleChange}
            width="300px"
            height="20px"
          />
          <PostInputField
            type="text"
            id="organization"
            label="주최"
            value={organization}
            placeholder=" 주최자"
            onChange={handleOrganizationChange}
            width="300px"
            height="20px"
          />
          <PostInputField
            type="datetime-local"
            id="title"
            label="시작"
            value={startSchedule}
            placeholder=""
            onChange={handleStartScheduleChange}
            width="300px"
            height="20px"
          />
          <PostInputField
            type="datetime-local"
            id="title"
            label="종료"
            value={endSchedule}
            placeholder=""
            onChange={handleEndScheduleChange}
            width="300px"
            height="20px"
          />
          <PostInputField
            type="text"
            id="location"
            label="장소"
            value={location}
            placeholder=" 건국대학교 노천극장"
            onChange={handleLocationChange}
            width="300px"
            height="20px"
          />
          <PostInputField
            type="text"
            id="title"
            label="내용"
            value={postInfo}
            placeholder=" 내용"
            onChange={handlePostInfoChange}
            width="300px"
            height="20px"
          />
        </PostInputFieldContainer>

        <ConfirmButtonWrapper>
          <ConfirmButton
            text="업로드 하기"
            width="333px"
            height="50px"
            fontSize="20px"
            backgroundcolor="#42D596"
            onClick={uploadPost}
            disabled={uploadButtonDisabled}
          />
        </ConfirmButtonWrapper>
      </PostContentsContainer>
      <Homebar></Homebar>
    </CreatePostContainer>
  );
};

export default CreatePost;
