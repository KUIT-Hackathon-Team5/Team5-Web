import styled from 'styled-components'

export const TitleContainer = styled.div<{backgroundcolor?: string}>`
    width: 393px;
    height: 42px;
    background-color: ${(props) => props.backgroundcolor || "white"};
`

export const TitleImage = styled.img`
    width: 76px;
    height: 19px;
    margin-left: 20px;
    margin-top: 10px;
    margin-bottom: 11px;
`