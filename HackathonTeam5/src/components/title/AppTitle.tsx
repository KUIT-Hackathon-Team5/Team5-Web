import kuzone from "../../assets/kuzone.png"
import kuzoneWhite from "../../assets/kuzoneWhite.png"
import { TitleContainer, TitleImage } from "./AppTitle.styled"

interface AppTitleProps {
  backgroundcolor?: string;
}

const AppTitle = (props: AppTitleProps) => {
  return (
    <TitleContainer backgroundcolor={props.backgroundcolor}>
        <TitleImage src={props.backgroundcolor ? kuzoneWhite : kuzone} />
    </TitleContainer>
  )
}

export default AppTitle
