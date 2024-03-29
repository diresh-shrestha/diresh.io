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
  border: 1px solid;
  padding: 1em 2em;
  border-radius: 3%;
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

  &:hover {
    border-color: var(--textLink);
  }
`

export default function Button({ text, disabled }) {
  return (
    <StyledButton disabled={disabled} className="hvr-sweep-to-right">
      {text}
    </StyledButton>
  )
}
