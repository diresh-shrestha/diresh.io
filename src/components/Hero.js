import React from "react"
import styled from "styled-components"
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
  border-radius: 3%;
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
    height: 600px;
  }
  @media (max-width: 425px) {
    display: none;
  }
`

const ImgCaption = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 1rem;
`

const MobileImg = styled(Img)`
  border-radius: 3%;
  left: 0;
  width: 100%;
  z-index: -1;
  margin: auto 1rem;
  border: 20px;
  height: auto;
  width: 380px;

  @media (max-width: 375px) {
    width: 350px;
  }

  @media (max-width: 375px) {
    width: 350px;
  }

  @media (max-width: 320px) {
    width: 280px;
  }
  @media (min-width: 426px) {
    display: none;
  }
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
  line-height: 2;
`

export default function Hero({ desktop, mobile }) {
  return (
    <Wrapper>
      <ContainerWrapper>
        <TextWrapper>
          <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
            Hello!
          </h1>
          <p
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            style={{ marginBottom: `0`, marginTop: `1rem` }}
          >
            My name is
          </p>
          <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
            Diresh Shrestha
          </h1>

          <div style={{ marginTop: `1rem` }}>
            <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
              Software Developer
            </p>
          </div>
          <Links
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <SocialLinks />
          </Links>
          <ButtonWrapper
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <Link to="/contact">
              <Button text="CONTACT" />
            </Link>
            <a
              href="https://drive.google.com/file/d/1mWu_KdZF-Dk6dVpaBS2XF-nRZz1yPw-B/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <Button text="RESUME" />
            </a>
          </ButtonWrapper>
        </TextWrapper>
        <ImageWrapper>
          <StyledImg fluid={desktop} />
          <MobileImg fluid={mobile} />
          <ImgCaption>
            Picture taken in{" "}
            <a
              className="hvr-underline-from-left"
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Sibelius_Monument_(Helsinki)"
            >
              Sibelius Monument
            </a>{" "}
          </ImgCaption>
        </ImageWrapper>
      </ContainerWrapper>
    </Wrapper>
  )
}
