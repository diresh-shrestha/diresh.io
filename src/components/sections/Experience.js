import React from "react"
import Container from "../Container"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};

  @media (max-width: 768px) {
    flex-direction: column;
  }
  .img {
    width: 100%;
    position: relative;
  }
  ul {
    display: list-item;
  }
  h4 {
    margin-top: 0rem;
  }
`
const TextWrapper = styled.p`
  margin: 1rem;
  width: fit-content;
`

const Location = styled.p`
  font-size: 0.9rem;
  line-height: 10px;
`

const Technologies = styled.span`
  display: inline-block;
  border: solid;
  margin-right: 0.5rem;
  padding: 0.2rem;
  border-radius: 10px;
  font-size: 0.8rem;
  border-width: 1px;
`

const TechContainer = styled.div`
  margin: 1rem auto;
`

export default function Experience({ content }) {
  const experience = content.map(exp => {
    const { body, frontmatter } = exp.node
    const technologies = frontmatter.technologies.map(item => {
      return <Technologies>{item}</Technologies>
    })
    return (
      <div style={{ marginBottom: `1rem` }}>
        <a
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
          className="hvr-underline-from-left"
          href={frontmatter.external}
          target="_blank"
        >
          <h4>{frontmatter.name}</h4>
        </a>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          <em>{frontmatter.title}</em>
        </p>
        <Location>
          <em>{frontmatter.location}</em>
        </Location>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          {frontmatter.date}
        </p>
        <Content direction={frontmatter.direction}>
          <Img
            className="img"
            fluid={frontmatter.image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain` }}
          />
          <TextWrapper
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <MDXRenderer>{body}</MDXRenderer>
            <TechContainer>{technologies}</TechContainer>
          </TextWrapper>
        </Content>
        <hr />
      </div>
    )
  })
  return (
    <Container id="experience">
      <ContentWrapper>
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          EXPERIENCE
        </h1>
        {experience}
      </ContentWrapper>
    </Container>
  )
}
