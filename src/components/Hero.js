import React from "react"
import styled from "styled-components"
import Typer from "./Typer"
import Img from "gatsby-image"

const Wrapper = styled.div`
  color: red;
  height: 800px;
  width: 100%;
`
const TextWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 8.5rem 3rem;
  text-align: left;
  h1 {
    font-size: 4rem;
    color: var(--textNormal);
  }
  @media (max-width: 1040px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 425px) {
    h1 {
      font-size: 3rem;
    }
  }
`

export default function Hero({ image }) {
  return (
    <Wrapper>
      <TextWrapper>
        <h1>Hi! I'm Diresh.</h1>
      </TextWrapper>
    </Wrapper>
  )
}
