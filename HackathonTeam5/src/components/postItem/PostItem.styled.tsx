import styled from 'styled-components'

export const PostItemContainer = styled.div`
    display: flex;
    width: 353px;
    height: 80px;
    padding: 10px;
    background-color: white;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
`

export const PostItemThumbnail = styled.img`
    width: 60px;
    height: 60px;
`

export const PostItemContents = styled.div`
    margin-left: 10px;
    width: calc(100% - 70px);
`

export const PostCategory = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: #555555;

    & > button {
        all: unset;
        cursor: pointer;
    }
    & > button > img {
        width: 13px;
        height: 12px;

    }
`

export const PostTitle = styled.div`
    font-weight: 500;
    font-size: 12px;
    white-space: nowrap; // 텍스트 한 줄 강제
    overflow: hidden; // 넘치는 텍스트 숨김
    text-overflow: ellipsis; // 넘치면 ...으로 표시
`

export const PostScheduleInfo = styled.div`
    display: flex;
    margin-top: 2px;

    & > div {
        font-size: 12px;
        color: #555555;
    }

    & > span {
        font-size: 12px;
        color: #555555;
    }
`

export const PostBody = styled.div`
    white-space: nowrap; // 텍스트 한 줄 강제
    overflow: hidden; // 넘치는 텍스트 숨김
    text-overflow: ellipsis; // 넘치면 ...으로 표시
    font-size: 12px;
    color: #C6C6C6;
    width: 100%;
    margin-top: 2px;
`