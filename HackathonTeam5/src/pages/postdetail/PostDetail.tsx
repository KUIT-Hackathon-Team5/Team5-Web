import React from 'react'
import Statusbar from '../../components/statusbar/Statusbar'
import AppTitle from '../../components/title/AppTitle'
import { CategoryTitle, FestivalName, Information } from './PostDetail.styles'
import Homebar from '../../components/homebar/Homebar' 
import Arrow from "../../assets/arrow.svg"
import Placeholder from "../../assets/placeholder.svg"
import Link from "../../assets/link.svg"
import Placeholder2 from "../../assets/placeholder_rec.svg"
import GreenBottom from './GreenBottom'
const PostDetail = () => {
  return (
    <>
    <Statusbar />
    <AppTitle />
    <CategoryTitle >
        <img src={Arrow} alt="화살표" />
        <p>인기 동아리 이벤트</p>
    </CategoryTitle>
    <FestivalName>
        <div className='category'>
            <p>스포츠</p>
            <p>스포츠</p>
        </div>
        <div className='name_image'>
            <img src={ Placeholder } alt="place-holder" />
            <p>축제 네임</p>
        </div>
    </FestivalName>
    <Information>
        <div className='host'>
            <p>주최</p>
            <p className='host-club'>동아리 네임</p>
            <div className='barogo'>
            <div className='button-container'>
                <button>동아리 바로가기
                    <img src={Link} alt="동아리바로가기" />
                </button>
            </div>
            </div>
        </div>
        <div className='host'>
            <div className='date-container'>
                <div className='left-side'>
                    <p>일시</p>
                    <div className='d-day'>D-5</div>
                </div>
                <p className='host-club2'>2025년 1월 12일 17시~ 2025년 1월 13일 18시</p>
            </div>
        </div>
        <div className='host'>
            <p>장소</p>
            <p className='host-club'>건국대학교 노천극장</p>
        </div>
        <div className='host'>
            <p>내용</p>
            <p className='host-club'>내용입력</p>
        </div>
        <div className='picture-container'>
            <p className='picture'>사진</p>
            <div className='post-detil-img-container'>
                <img src={Placeholder2} alt="place-holder" />
                <img src={Placeholder2} alt="place-holder" />
                <img src={Placeholder2} alt="place-holder" />
                <img src={Placeholder2} alt="place-holder" />
            </div>
        </div>
        <GreenBottom/>
        <Homebar bgColor='#42D596'/>
    </Information>
    </>
  )
}

export default PostDetail