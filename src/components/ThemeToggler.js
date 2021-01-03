import React, { useEffect, useState } from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import styled from "styled-components"
import { check } from "prettier"

const StyledLabel = styled.label`
  background-color: var(--toggler);
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
`

const Ball = styled.div`
  background-color: var(--bg);
  border-radius: 50%;
  position: absolute;
  top: 1px;
  left: 1px;
  height: 18px;
  width: 18px;
  transform: ${theme => (theme ? "light" : "translateX(0px)")};
  transform: ${theme => (theme ? "dark" : "translateX(20px)")};

  transition: transform 0.2s linear;
`

const StyledInput = styled.input`
  opacity: 0;
  position: absolute;
`

function useDarkMode() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    localTheme && setTheme(localTheme)
  }, [])
  return theme
}

export default function MyComponent() {
  // let current =
  //   typeof window !== "undefined" ? localStorage.getItem("theme") : null
  // // if (typeof window !== "undefined") {
  // //   localStorage.setItem("theme", "light")
  // // }
  // const getCurrent = theme => {
  //   current = theme
  //   return current
  // }

  const theme = useDarkMode()

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <StyledLabel for="chk">
          <StyledInput
            id="chk"
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
        </StyledLabel>
      )}
    </ThemeToggler>
  )
}
