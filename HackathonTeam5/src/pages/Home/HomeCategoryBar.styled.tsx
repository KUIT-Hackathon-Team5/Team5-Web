import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  padding-left: 30px;
  align-items: center;
  width: 393px;
  height: 42px;
  gap: 30px;
  background-color: white;
`;

export const CategoryButton = styled.button<{ isactive: boolean }>`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  padding: 5px;

  color: ${(props) => (props.isactive ? "#000000" : "#555555")};
  border-bottom: ${(props) => (props.isactive ? "2px solid #42D596" : "none")};

  &:hover {
    color: #000000;
  }
`;
