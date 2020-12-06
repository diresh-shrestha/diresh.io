import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  overflow: hidden;
  outline: none;
  display: flex;
  color: var(--textLink);
  background-color: transparent;
  text-align: center;
  position: relative;
  border: solid;
  padding: 1em 2em;
  border-radius: 4px;
  transition: color calc(0.5s * 0.75);
  font-weight: 900;
  cursor: pointer;
  align-items: center;
  letter-spacing: 2px;
  justify-content: center;
  z-index: 1;
  font-size: 16px;
  margin: 2rem 0rem;
  margin-right: 1rem;
  @media (max-width: 320px) {
    margin-right: 0.5rem;
  }
`

export default function Button({ text }) {
  return <StyledButton className="hvr-sweep-to-right">{text}</StyledButton>
}
