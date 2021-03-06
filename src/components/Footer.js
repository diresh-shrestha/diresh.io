import React from "react"
import Container from "./Container"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "./icons/SocialLinks"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

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

const AboutImg = styled(Img)`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 1rem;
  @media (max-width: 425px) {
    margin: 1rem auto;
  }
`

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "sections/Footer/About.webp" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledFooter>
      <Wrapper>
        <AboutImg
          className="hvr-float-shadow"
          fluid={data.file.childImageSharp.fluid}
        />
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
