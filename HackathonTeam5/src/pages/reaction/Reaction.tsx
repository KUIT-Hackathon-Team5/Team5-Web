import React from 'react'
import { Container, Header } from './Reaction.styles'
import InputBar from '../../components/inputBar/InputBar'
import Homebar from '../../components/homebar/Homebar'
import Statusbar from '../../components/statusbar/Statusbar'
const Reaction = () => {
  return (
    <>
    <Statusbar />
    <div>KU:zone</div>
    <Container>
        <Header>
            <p className='title'>반응 둘러보기</p>
            <p className='subtitle'>학우들이 남긴 기대평과 분위기를 미리 확인하세요!</p>
        </Header>
        <div>댓글1</div>
        <div>댓글2</div>
        <div style={{ position: 'absolute', bottom: '0', width: '100%' }}>
                <InputBar />
        </div>
    </Container>
    <Homebar />
    </> 
  )
}

export default Reaction