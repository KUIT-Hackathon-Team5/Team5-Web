import Statusbar from "../../components/statusbar/Statusbar"
import AppTitle from "../../components/title/AppTitle"
import { CreatePostContainer } from "./CreatePost.styled"

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <Statusbar backgroundcolor="#42D596" /> 
      <AppTitle backgroundcolor="#42D596"/>
    </CreatePostContainer>
  )
}

export default CreatePost
