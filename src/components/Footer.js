import React from "react"
import Container from "./Container"
import styled from "styled-components"
import Github from "./icons/Github"
import Linkedin from "./icons/Linkedin"
import Mail from "./icons/Mail"
import SourceCode from "./icons/SourceCode"

const StyledFooter = styled.footer`
  margin-top: 2rem;
  text-align: center;
  height: 300px;
`
const Links = styled.a`
  margin-right: 1rem;
`
const Line = styled.hr`
  margin-bottom: 3rem;
  border: solid;
  color: var(--textNormal);
`
export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <p>© {new Date().getFullYear()} - Diresh Shrestha</p>
        <Github />

        <Linkedin />

        <Mail />

        <SourceCode />
      </Container>
    </StyledFooter>
  )
}
