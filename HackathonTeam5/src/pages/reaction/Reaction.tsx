import React from 'react'
import { Container, Header } from './Reaction.styles'
import InputBar from '../../components/inputBar/InputBar'
import Homebar from '../../components/homebar/Homebar'
import Statusbar from '../../components/statusbar/Statusbar'
import Reply from '../../components/reply/Reply'
import Placeholder from "../../assets/placeholder_rec.svg"
const Reaction = () => {
  return (
    <>
    <Statusbar />
    <Container>
        <Header>
            <p className='title'>반응 둘러보기</p>
            <p className='subtitle'>학우들이 남긴 기대평과 분위기를 미리 확인하세요!</p>
        </Header>
        <Reply 
        username="닉네임1"
        dateTime="2025. 1.5 15:20"
        content="너무 기대된다!" 
      />
      <Reply 
        username="닉네임2"
        dateTime="2025. 1.5 15:25"
        content="정말 좋은 소식이네요!" 
      />

        <Reply
        username="닉네임1"
        dateTime="2025. 1.5 15:20"
        content="너무 기대된다!"
        images={[
            Placeholder,
            Placeholder,
            Placeholder,
        ]}
        />
        <div className='InputBar_container'>
            <InputBar />
        </div>
        <Homebar />
    </Container>
    
    </> 
  )
}

export default Reaction