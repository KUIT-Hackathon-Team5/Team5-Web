import kuzone from "../../assets/kuzone.png"
import { TitleContainer, TitleImage } from "./AppTitle.styled"

const AppTitle = () => {
  return (
    <TitleContainer>
        <TitleImage src={kuzone} />
    </TitleContainer>
  )
}

export default AppTitle
