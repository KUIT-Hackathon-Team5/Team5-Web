import React from 'react'
import Components from "./Onboarding.styles"
const { OnboardingContainer, OnboardingTitle, OnboardingSubtitle } = Components;

const Onboarding = () => {
  return (
    <OnboardingContainer>
      <OnboardingTitle>
        KU:ZONE
      </OnboardingTitle>
      <OnboardingSubtitle>
        건국대학교의 모든 즐거움이 모이는 곳
      </OnboardingSubtitle>
    </OnboardingContainer>
  )
}

export default Onboarding
