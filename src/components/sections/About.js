import React from "react"
import Container from "../Container"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Skills from "../icons/Skills"

const Wrapper = styled(Container)`
  @media (max-width: 768px) {
    margin-top: 40rem;
  }
  @media (max-width: 425px) {
    margin-top: 35rem;
  }
`

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const InnerHeading = styled.p`
  margin-top: 5rem;
  text-align: center;
`

export default function About({ content }) {
  const { frontmatter, body } = content[0].node
  return (
    <Wrapper id="about">
      <ContentWrapper>
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          {frontmatter.title}
        </h1>

        <Content>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
            <MDXRenderer>{body}</MDXRenderer>
          </p>
        </Content>
        <InnerHeading>
          <strong>Technologies</strong> I've been using recently
        </InnerHeading>
        <Skills />
      </ContentWrapper>
    </Wrapper>
  )
}
