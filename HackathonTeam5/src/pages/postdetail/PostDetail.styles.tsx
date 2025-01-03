import styled from 'styled-components'

export const CategoryTitle = styled.div`
    width: 393px;
    height: 42px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    img {
        width: 16px;
        height: 16px;
        padding-left: 16px;
    }

    p {
        margin: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        gap: 10px;
        color: #000;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 24px; /* 150% */
        padding-left: 12px;

    }
`

export const FestivalName = styled.div`
    width: 393px;
    .category {
        width: 373px;
        height: 12px;
        display: flex;
        gap: 10px;
        padding-left: 20px;
        p {
            margin: 0;
            color: var(--2, #555);
            text-align: center;
            font-family: Pretendard;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            display: inline-flex;
            height: 12px;
            padding: 0px 4px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            background: #E4E4E4;
        }
    }

    .name_image {
        width: 373px;
        height: 60px;
        display: flex;
        align-items: center;
        img {
            width: 30px;
            height: 30px;
            flex-shrink: 0;
            padding-left: 20px;
        }

        p { 
            margin: 0;
            padding-left: 10px;
            color: #000;
            text-align: center;
            font-family: Pretendard;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
            line-height: 24px; /* 150% */
        }
    }
`

export const Information = styled.div`
    width: 393px;
    height: 637.5px;
    background-color: #f3f3f3;
    position: relative;
    overflow: hidden;
    .host {
        display: flex;
        align-items: center;

        .button-container {
            padding: 3px 7px 1px 7px;
            border-radius: 100px;
            background: var(--4, #E4E4E4);
            
        }
    }

    .host:nth-of-type(1) {
        padding-top: 20px;
        margin-bottom: 39px;
    } 

    .host:nth-of-type(2) {
        width: 393px;
        margin-bottom: 20px;
        .date-container {
            display: flex;
        }

        .host-club2 {
            width: 296px;
            margin: 0;
            padding-left: 16px;
            color: #555555;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px; /* 142.857% */
        }
    } 
    
    .host:nth-of-type(3) {
    margin-bottom: 38px;
    }

    .d-day {
            width: 26px;
            margin-left: 17px;
            display: inline-flex;
            height: 12px;
            padding: 0px 4px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            border-radius: 8px;
            background-color: #42D596;
            color: #FFF;
            text-align: center;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
        }

    p:nth-of-type(1) {
        margin: 0;
        width: 41px;
        height: auto;
        color: #000;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
        padding-left: 20px;
    }

    .host-club {
        margin: 0;
        padding-left: 16px;
        color: #555555;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px; /* 142.857% */
    }

    .barogo {
        padding-left: 41px;
        button {
            margin: 0;
            padding: 0;
            border: none;
            background: none;
            color: inherit;
            font: inherit;
            line-height: inherit;
            text-align: inherit;
            cursor: pointer;
            box-sizing: border-box; /* 박스 크기 계산 표준화 */

            img {
                padding-left: 4px;
            }
            }
    }

    .picture-container {
        margin-top: 116px;
    }
    
    .picture {
        padding-bottom: 10px;
        width: 41px;
        height: auto;
        flex-shrink: 0;
        color: #000;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: 20px; /* 142.857% */
    }

    .post-detil-img-container {
        display: flex;
        justify-content: space-evenly;
        gap: 16px;
        img {
            width: 169px;
            height: 155px;
            flex-shrink: 0;
        }
        overflow-y: hidden;
        overflow-x: auto;
          /* 스크롤바 스타일 숨기기 */
        ::-webkit-scrollbar {
            display: none;
        }

        /* Firefox */
        scrollbar-width: none; /* 스크롤바 숨기기 */
        -ms-overflow-style: none; /* IE, Edge */
    }
    
    
`