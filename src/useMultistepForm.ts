import { ReactElement, useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  function next() {
    setCurrentStepIdx((prev) => (prev >= steps.length - 1 ? prev : prev + 1));
  }
  function back() {
    setCurrentStepIdx((prev) => (prev <= 0 ? prev : prev - 1));
  }
  function goTo(index: number) {
    setCurrentStepIdx(index);
  }

  return {
    currentStepIdx,
    step: steps[currentStepIdx],
    goTo,
    next,
    back,
    steps,
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
  };
}
