import React from "react"
import Container from "./Container"
import styled from "styled-components"
// import Github from "./icons/Github"
// import Linkedin from "./icons/Linkedin"
// import Mail from "./icons/Mail"
// import SourceCode from "./icons/SourceCode"
import SocialLinks from "./icons/SocialLinks"

const StyledFooter = styled.footer`
  margin-top: 2rem;
  text-align: center;
  height: 300px;
`

const Links = styled.div`
  margin: 2rem auto;
`

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <p>© {new Date().getFullYear()} - Diresh Shrestha</p>
        <Links>
          <SocialLinks />
        </Links>
      </Container>
    </StyledFooter>
  )
}
