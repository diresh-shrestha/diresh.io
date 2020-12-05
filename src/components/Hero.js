import React from "react"
import styled from "styled-components"
import Typer from "./Typer"
import Img from "gatsby-image"
import Container from "./Container"
import SocialLinks from "./icons/SocialLinks"
import { Link } from "gatsby"

const ContainerWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  background: none;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Wrapper = styled.div`
  height: 800px;
  width: 100%;

  @media (max-width: 768px) {
    height: 600px;
  }
`
const TextWrapper = styled(Container)`
  background: none;
  position: relative;
  padding: 0;
  text-align: left;
  margin-top: 10rem;
  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: var(--textTitle);
  }
  @media (max-width: 768px) {
    margin-top: 4rem;
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
  }
`

const StyledImg = styled(Img)`
  //  top: 40px;
  border-radius: 20px;
  left: 0;
  width: 100%;
  z-index: -1;
  margin: 2rem 1rem;
  border: 20px;

  height: 700px;
  max-width: 600px;
  @media (max-width: 768px) {
    max-width: 700px;
    margin: 2rem auto;
    height: 600px;
  }
  @media (max-width: 425px) {
    width: 380px;
    height: auto;
  }
  @media (max-width: 320px) {
    width: 300px;
  }
`

const MobileImg = styled(Img)`
  //position: absolute !important;
  width: 100%;
  z-index: -1;
  //top: 80px;
  left: 0;
  // @media (min-width: 769px) {
  //   display: none;
  // }
`

const ImageWrapper = styled.div`
  padding: 1rem;

  max-width: 600px;
`

const Links = styled.div`
  margin-top: 2rem;
`

export default function Hero({ desktop, mobile }) {
  return (
    <Wrapper>
      <ContainerWrapper>
        <TextWrapper>
          <h1>Hello!</h1>
          <p>My name is</p>
          <h1>Diresh Shrestha</h1>
          <div style={{ marginTop: `2rem` }}>
            <p>
              A Software Developer having experience with React, Gatsby and
              Graphql
            </p>
          </div>
          <Links>
            <SocialLinks />
          </Links>
        </TextWrapper>

        <StyledImg fluid={desktop} />

        {/* <MobileImg fluid={mobile} /> */}
      </ContainerWrapper>
    </Wrapper>
  )
}
