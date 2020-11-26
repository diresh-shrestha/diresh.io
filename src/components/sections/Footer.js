import React from "react"
import Container from "../Container"
import styled from "styled-components"

const StyledFooter = styled.footer`
  margin-top: 2rem;
  text-align: center;
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <p>© {new Date().getFullYear()} - Diresh Shrestha</p>
      </Container>
    </StyledFooter>
  )
}
