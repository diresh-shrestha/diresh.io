import React from "react"
import styled from "styled-components"
import Typer from "./Typer"
import Img from "gatsby-image"
import Container from "./Container"
import SocialLinks from "./icons/SocialLinks"
import { Link } from "gatsby"
import Button from "./Button"

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
  margin: 0 1rem;
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
  border-radius: 20px;
  left: 0;
  width: 100%;
  z-index: -1;

  border: 20px;

  height: 700px;
  width: 600px;
  margin: auto 1rem;
  @media (max-width: 1024px) {
    width: 500px;
    height: 600px;
  }
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
  margin: 2rem auto;
`

const Links = styled.div`
  margin-top: 2rem;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Hero({ desktop, mobile }) {
  return (
    <Wrapper>
      <ContainerWrapper>
        <TextWrapper>
          <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            Hello!
          </h1>
          <p
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            data-sal-duration="1000"
            style={{ marginBottom: `0`, marginTop: `1rem` }}
          >
            My name is
          </p>
          <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
            Diresh Shrestha
          </h1>

          <div style={{ marginTop: `1rem` }}>
            <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
              Software Developer
            </p>
          </div>
          <Links
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <SocialLinks />
          </Links>
          <ButtonWrapper
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
          >
            <Link to="/contact">
              <Button text="CONTACT" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1Y-Yin6Q1JhdJSlYTc-DFjtFyf626Tjgm/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button text="RESUME" />
            </a>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <StyledImg fluid={desktop} />
        </ImageWrapper>

        {/* <MobileImg fluid={mobile} /> */}
      </ContainerWrapper>
    </Wrapper>
  )
}
