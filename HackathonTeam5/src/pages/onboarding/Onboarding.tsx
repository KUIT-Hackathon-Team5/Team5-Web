import React from "react";
import {
  OnboardingContainer,
  OnboardingTitle,
  OnboardingSubtitle,
} from "./Onboarding.styles";
import Statusbar from "../../components/statusbar/Statusbar";
import Homebar from "../../components/homebar/Homebar";
const Onboarding = () => {
  return (
    <>
    <Statusbar backgroundcolor='#42D596' />
    <OnboardingContainer>
      <OnboardingTitle>KU:ZONE</OnboardingTitle>
      <OnboardingSubtitle>
        건국대학교의 모든 즐거움이 모이는 곳
      </OnboardingSubtitle>
      <Homebar bgColor="#42D596"/>
    </OnboardingContainer>
    </>
  );
};

export default Onboarding;
