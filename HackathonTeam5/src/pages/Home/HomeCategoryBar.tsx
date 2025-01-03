import { useState } from "react";
import { CategoryContainer, CategoryButton } from "./HomeCategoryBar.styled";

const HomeCategoryBar = () => {
  const [activeButton, setActiveButton] = useState<"button1" | "button2">(
    "button1"
  );

  const handleCategoryButtonClick = (button: "button1" | "button2") => {
    // 유니온 타입, 변수 등이 여러 타입 중 하나를 가질 수 있음
    setActiveButton(button);
  };

  return (
    <CategoryContainer>
      <CategoryButton
        isactive={activeButton === "button1"}
        onClick={() => handleCategoryButtonClick("button1")}
      >
        동아리
      </CategoryButton>
      <CategoryButton
        isactive={activeButton === "button2"}
        onClick={() => handleCategoryButtonClick("button2")}
      >
        단과대 축제
      </CategoryButton>
    </CategoryContainer>
  );
};

export default HomeCategoryBar;
