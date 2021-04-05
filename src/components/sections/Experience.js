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
  margin: 2rem 0;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .img {
    width: 100%;
    position: relative;
    border-radius: 3%;
  }
  ul {
    display: list-item;
  }
  h4 {
    margin-top: 0rem;
  }
`
const TextWrapper = styled.p`
  margin: 0.5rem;
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
  color: var(--textNormal);
`

const Break = styled.hr`
  margin: 1rem auto;
  border: none;
  height: 1px;
  background-color: grey;
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
          className="hvr-underline-from-left"
          href={frontmatter.external}
          target="_blank"
        >
          <h4>{frontmatter.name}</h4>
        </a>
        <p>
          <em>{frontmatter.title}</em>
        </p>
        <Location>
          <em>{frontmatter.location}</em>
        </Location>
        <p>{frontmatter.date}</p>
        <TechContainer>{technologies}</TechContainer>
        <Content direction={frontmatter.direction}>
          <Img
            className="img"
            fluid={frontmatter.image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain` }}
          />
          <TextWrapper>
            <MDXRenderer>{body}</MDXRenderer>
          </TextWrapper>
        </Content>
        <Break />
      </div>
    )
  })
  return (
    <Container id="experience">
      <ContentWrapper>
        <h1>EXPERIENCE</h1>

        {experience}
      </ContentWrapper>
    </Container>
  )
}
