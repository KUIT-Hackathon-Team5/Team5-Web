import Circle from "../../assets/circle.svg";
import Plus from "../../assets/plus.svg";
import UploadCircle from "../../assets/uploadButton_circle.svg";
import UploadArrow from "../../assets/uploadButton_arrow.svg";
import { Container, ImageWrapper, ImageWrapper2, CircleImage, PlusImage, UploadCircleImage, UploadArrowImage} from "./InputBar.styled";
import ConfirmButton from "../button/confirmButton";

const InputBar = () => {
  return (
    <Container>
      <ImageWrapper>
        <CircleImage src={Circle} alt="green-circle" />
        <PlusImage src={Plus} alt="green-plus" />
      </ImageWrapper>
      <ConfirmButton
        text="댓글입력"
        width="255px"
        height="38px"
        fontSize="14px"
        backgroundcolor="#c6c6c6"
        onClick={() => {
          console.log("버튼이 클릭되었습니다!");
        }}
      />
      <ImageWrapper2>
        <UploadCircleImage src= { UploadCircle } alt="upload-circle" />
        <UploadArrowImage src= { UploadArrow } alt="upload-image" />
      </ImageWrapper2>
    </Container>
  );
};

export default InputBar;
