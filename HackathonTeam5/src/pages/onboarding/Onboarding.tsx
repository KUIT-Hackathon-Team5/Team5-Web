import React from "react";
import {
  OnboardingContainer,
  OnboardingTitle,
  OnboardingSubtitle,
} from "./Onboarding.styles";
import Statusbar from "../../components/statusbar/Statusbar";

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <Statusbar backgroundcolor='#42D596' />
      <OnboardingTitle>KU:ZONE</OnboardingTitle>
      <OnboardingSubtitle>
        건국대학교의 모든 즐거움이 모이는 곳
      </OnboardingSubtitle>
    </OnboardingContainer>
  );
};

export default Onboarding;
