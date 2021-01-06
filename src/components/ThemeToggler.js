import React, { useEffect, useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "styled-components"
import { check } from "prettier"
import Moon from "./icons/Moon"
import Sun from "./icons/Sun"

const StyledLabel = styled.label`
  border-radius: 50px;
  cursor: pointer;
  display: inline-block;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  height: 20px;
  width: 20px;
  transform: scale(1.5);
  margin: 0rem 3rem;
  vertical-align: middle;

  svg {
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    &:nth-child(2) {
      transform: ${({ theme }) =>
        theme === "dark" ? "translateY(-100px)" : "translateY(0)"};
    }

    &:nth-child(3) {
      transform: ${({ theme }) =>
        theme === "dark" ? "translateY(0)" : "translateY(-100px)"};
    }
    transition: all 0.3s linear;
`

// const Ball = styled.div`
//   background-color: var(--bg);
//   border-radius: 50%;
//   position: absolute;
//   top: 1px;
//   left: 1px;
//   height: 18px;
//   width: 18px;
//   transform: ${theme => (theme ? "light" : "translateX(0px)")};
//   transform: ${theme => (theme ? "dark" : "translateX(20px)")};

//   transition: transform 0.2s linear;
// `

const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
`

export default function MyComponent() {
  // const [currentTheme, setCurrentTheme] = useState("light")
  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme")
  //   setCurrentTheme(localTheme)
  // }, [])
  // console.log(currentTheme)
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <StyledLabel for="chk" theme={theme}>
          <StyledInput
            id="chk"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <Moon />
          <Sun />
        </StyledLabel>
      )}
    </ThemeToggler>
  )
}
