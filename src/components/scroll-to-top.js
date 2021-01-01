import React from "react"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

const ScrollToTop = () => {
  return (
    <ScrollUpButton
      ContainerClassName="scroll-top-button-container"
      TransitionClassName="scroll-top-button-transition"
      ShowAtPosition={500}
      AnimationDuration={200}
    ></ScrollUpButton>
  )
}

export default ScrollToTop
