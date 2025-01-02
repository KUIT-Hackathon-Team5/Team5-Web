import React from "react";
import { Container, UserInputLabel, UserInput } from "./UserInputField.styles"

interface UserInputFieldProps {
    type: string; // 입력 필드의 유형(text, email, password, number 등) 
    id?: string; // 해당 필드에 고유한 식별자 부여, label태그와 연결할 때 필요
    label: string; // label: 사용자가 입력해야 할 내용 안내
    value: string; // value: 입력 필드의 현재 값
    placeholder: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const UserInputField = (props: UserInputFieldProps) => {
    return (
    <Container>
      <UserInputLabel htmlFor={props.id}>{props.label}</UserInputLabel>
      <UserInput 
        type={props.type}
        id={props.id}
        value={props.value} 
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Container>
  );
};

export default UserInputField;
