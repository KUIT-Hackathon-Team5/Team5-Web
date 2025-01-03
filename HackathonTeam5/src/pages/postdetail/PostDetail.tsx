import React from 'react'
import Statusbar from '../../components/statusbar/Statusbar'
import AppTitle from '../../components/title/AppTitle'
import { CategoryTitle, FestivalName, Information } from './PostDetail.styles'
import Homebar from '../../components/homebar/Homebar' 
import Arrow from "../../assets/arrow.svg"
import Placeholder from "../../assets/placeholder.svg"
import Link from "../../assets/link.svg"
import GreenBottom from './GreenBottom'

interface PostDetailProps {
  categoryTitle: string;   // "인기 동아리 이벤트"
  type: string;   // "부원모집"
  title: string;    // "축제 네임"
  organizer: string;        // "동아리 네임"
  startTime: string;        // "2025년 1월 12일 17시"
  endTime: string;        // "2025년 1월 13일 18시"
  place: string;        // "건국대학교 노천극장"
  contents: string;         // "내용입력"
  organizer_link?: string;
  images?: string[];    // 이미지 URL 배열 (선택적)
}

const PostDetail: React.FC<PostDetailProps> = ({
    categoryTitle,
    type,
    title,
    organizer,
    startTime,
    endTime,
    place,
    contents,
    organizer_link,
    images = []  // 기본값은 빈 배열로 설정
}) => {

    // 동아리 바로가기 버튼 클릭 시 링크로 이동하는 함수
    const handleOrganizerLinkClick = () => {
        if (organizer_link) {
            window.location.href = organizer_link;  // organizer_link로 이동
        }
    };

    return (
    <>
        <Statusbar />
        <AppTitle />
        <CategoryTitle>
        <img src={Arrow} alt="화살표" />
        <p>{categoryTitle}</p>
        </CategoryTitle>
        <FestivalName>
        <div className='category'>
            <p>{type}</p>
        </div>
        <div className='name_image'>
            <img src={Placeholder} alt="place-holder" />
            <p>{title}</p>
        </div>
        </FestivalName>
        <Information>
        <div className='host'>
            <p>주최</p>
            <p className='host-club'>{organizer}</p>
            {organizer_link && (
                <div className='barogo'>
                    <div className='button-container'>
                        <button onClick={handleOrganizerLinkClick}>동아리 바로가기
                        <img src={Link} alt="동아리바로가기" />
                        </button>
                    </div>
                </div>
            )}
        </div>
        <div className='host'>
            <div className='date-container'>
            <div className='left-side'>
                <p>일시</p>
                <div className='d-day'>D-5</div>
            </div>
            <p className='host-club2'>{startTime}~{endTime}</p>
            </div>
        </div>
        <div className='host'>
            <p>장소</p>
            <p className='host-club'>{place}</p>
        </div>
        <div className='host'>
            <p>내용</p>
            <p className='host-club'>{contents}</p>
        </div>
        <div className='picture-container'>
            <p className='picture'>사진</p>
            <div className='post-detil-img-container'>
            {images.map((url, index) => (
                <img key={index} src={url} alt={`place-holder-${index}`} />
            ))}
            </div>
        </div>
        <GreenBottom />
        <Homebar bgColor='#42D596' />
        </Information>
    </>
    )
}

export default PostDetail;
