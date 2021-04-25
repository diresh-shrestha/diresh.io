import React from "react"
import Container from "./Container"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "./icons/SocialLinks"
import { StaticImage } from "gatsby-plugin-image"

const StyledFooter = styled.footer`
  margin-top: 2rem;
  text-align: center;
  height: 300px;
`

const Wrapper = styled(Container)`
  display: flex;
  flex-directin: row;
  justify-content: center;
  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const Links = styled.div`
  margin: 2rem auto;
`

const AboutImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 1rem;
  @media (max-width: 425px) {
    margin: 1rem auto;
  }

  .img {
    border-radius: 50%;
  }
`

export default function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <AboutImg className="hvr-float-shadow">
          <StaticImage className="img" src="../images/About.jpg" />
        </AboutImg>
        <div style={{ margin: `1rem 1rem` }}>
          <Links>
            <SocialLinks />
          </Links>
          <p>© {new Date().getFullYear()} - Diresh Shrestha</p>
        </div>
      </Wrapper>
    </StyledFooter>
  )
}
