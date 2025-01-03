import React from 'react'
//import { useParams } from 'react-router-dom';  // URL 파라미터 받기
import { Container, Header } from './Reaction.styles'
import InputBar from '../../components/inputBar/InputBar'
import Homebar from '../../components/homebar/Homebar'
import Statusbar from '../../components/statusbar/Statusbar'
import Reply from '../../components/reply/Reply'
import Placeholder from "../../assets/placeholder_rec.svg"
import AppTitle from '../../components/title/AppTitle'
const Reaction = () => {
    //const { postId } = useParams();  // URL에서 postId 받기
    
    // 실제로는 postId에 맞는 댓글 데이터를 서버에서 받아옴
    // 예시로 더미 데이터 사용
    const comments = [
        { username: "닉네임1", dateTime: "2025. 1.5 15:20", content: "너무 기대된다!" },
        { username: "닉네임2", dateTime: "2025. 1.5 15:25", content: "정말 좋은 소식이네요!", images:[Placeholder, Placeholder]}
    ];
  return (
    <>
    <Statusbar />
    <AppTitle/>
    <Container>
        <Header>
            <p className='title'>반응 둘러보기</p>
            <p className='subtitle'>학우들이 남긴 기대평과 분위기를 미리 확인하세요!</p>
        </Header>
        {/* 댓글들 렌더링 */}
        {comments.map((comment, index) => (
                    <Reply
                        key={index}
                        username={comment.username}
                        dateTime={comment.dateTime}
                        content={comment.content}
                    />
                ))}
        <div className='InputBar_container'>
            <InputBar />
        </div>
        <Homebar />
    </Container>
    
    </> 
  )
}

export default Reaction