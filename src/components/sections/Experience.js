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
  flex-direction: row;

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

export default function Experience({ content }) {
  const experience = content.map(exp => {
    const { body, frontmatter } = exp.node
    const technologies = frontmatter.technologies.map(item => {
      return <li>{item}</li>
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
        <p>{frontmatter.date}</p>
        <Content>
          <Img
            className="img"
            fluid={frontmatter.image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain` }}
          />
          <TextWrapper>
            <MDXRenderer>{body}</MDXRenderer>
            <p>Technologies Used:</p>
            <ul>{technologies}</ul>
          </TextWrapper>
        </Content>
        <hr />
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
