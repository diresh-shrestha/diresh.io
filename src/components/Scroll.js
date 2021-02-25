import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Arrow from "../components/icons/ArrowUp"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scorlled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
  }, [])

  const StyledScroll = styled.div`
    position: fixed;
    bottom: 8rem;
    right: 1rem;
    animation: fadeIn 700ms ease-in-out 1s both;
    cursor: pointer;
    display: block;
    z-index: 99;
    border: solid var(--textNormal);
    border-radius: 5px;
  `

  return (
    <StyledScroll>
      {isVisible && (
        <div onClick={scrollToTop}>
          <Arrow />
        </div>
      )}
    </StyledScroll>
  )
}
