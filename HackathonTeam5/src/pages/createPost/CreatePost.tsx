import Statusbar from "../../components/statusbar/Statusbar";
import AppTitle from "../../components/title/AppTitle";
import {
  CreatePostContainer,
  PostContentsContainer,
  UsageGuideContainer,
  PostInputFieldContainer,
  UsageGuideConfirmBtnContainer,
  ConfirmButtonWrapper
} from "./CreatePost.styled";
import info from "../../assets/info.png";
import { useState } from "react";
import PostInputField from "../../components/postInputField/PostInputField";
import confirmbutton from "../../assets/confirmbutton.png";
import confirmedbutton from "../../assets/confirmedbutton.png";
import ConfirmButton from "../../components/button/confirmButton";
import Homebar from "../../components/homebar/Homebar";

const CreatePost = () => {
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [organization, setOrganization] = useState("");
  const [startSchedule, setStartSchedule] = useState("");
  const [endSchedule, setEndSchedule] = useState("");
  const [location, setLocation] = useState("");
  const [postInfo, setPostInfo] = useState("");
  const [usageGuideConfirmed, setUsageGuideConfirmed] =
    useState<boolean>(false);

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

  const uploadPost = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("uploadPost")
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

        <UsageGuideConfirmBtnContainer onClick={handleUsageGuideButton}>
          {usageGuideConfirmed ? (
            <img src={confirmedbutton} alt="" />
          ) : (
            <img src={confirmbutton} alt="" />
          )}
          <div>확인했습니다.</div>
        </UsageGuideConfirmBtnContainer>

        <PostInputFieldContainer>
          <PostInputField
            type="text"
            id="type"
            label="분야"
            value={type}
            placeholder=" 이벤트 종류"
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
