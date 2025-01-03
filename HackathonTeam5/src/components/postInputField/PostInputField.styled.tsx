import styled from 'styled-components'

export const PostInputContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`

export const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    margin-top: 3px;
`
interface InputProps {
    width?: string;
    height?: string;
}

export const Input = styled.input<InputProps>`
    width: ${(props) => props.width || "250px"};
    height: ${(props) => props.height || "20px"};
    border: none;
    outline: none;
    border-bottom: 1px solid #C6C6C6;
    font-size: 14px;

`