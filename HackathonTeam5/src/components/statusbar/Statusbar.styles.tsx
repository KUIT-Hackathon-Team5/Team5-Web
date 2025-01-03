import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    width: 393px;
    height: 59px;
    justify-content: space-evenly; /* 좌우 요소 정렬 */
    align-items: center;
    
    //padding: 0 12px; /* 좌우 여백 */
    box-sizing: border-box;

    .time {
        left: 15px;
        display: flex;
        width: auto; /* 시간 크기를 콘텐츠에 맞게 */
        justify-content: center;
        align-items: center;
        color: var(--Label-Color-Light-Primary, #000);
        text-align: center;

        /* Callout / Bold */
        font-family: "SF Pro Text";
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 131.25% */
        letter-spacing: -0.32px;
    }

    .dynamic {
        position: relative; /* 카메라 영역 배치를 위한 설정 */
        display: flex;
        width: 120px; /* 노치와 카메라 영역을 포함한 가로 크기 */
        height: 37px;
        justify-content: center;
        align-items: center;
    }

    .notch {
        position: absolute;
        top: 0;
        left: 19px;
        width: 125px;
        height: 37px;
        border-radius: 20px;
        background: black;
    }


    .right-side {
        display: flex;
        justify-content: flex-end; /* 아이콘 우측 정렬 */
        align-items: center;
        gap: 8px;

        img {
            width: 18px; /* 아이콘 크기 조정 */
            height: 18px;
        }
    }
`;
