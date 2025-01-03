import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    width: 393px;
    height: 723.5px;
    flex-shrink: 0;
    border-radius: 20px 20px 0px 0px;
`

export const Header = styled.div`
    display: flex;
    width: 249px;
    padding: 16px 72px 17px 72px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    

    .title {
        margin: 0;
        width: 128px;
        height: 21px;
        color: #000;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px; /* 150% */
    }

    .subtitle{
        margin: 0;
        width: 249px;
        height: 12px;
        color: var(--2, #555);
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px; /* 166.667% */
    }
`