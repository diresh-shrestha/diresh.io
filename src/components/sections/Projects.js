import React from "react"
import Container from "../Container"
import styled from "styled-components"
import Github from "../icons/Github"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Linkedin from "../icons/Linkedin"

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
    display: inline-block;
  }
`
const TextWrapper = styled.p`
  margin: 1rem;
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
const Break = styled.hr`
  margin: 1rem auto;
  border: none;
  height: 1px;
  background-color: grey;
`

export default function Projects({ content }) {
  const projects = content.map(proj => {
    const { body, frontmatter } = proj.node
    const technologies = frontmatter.technologies.map(item => {
      return <Technologies>{item}</Technologies>
    })
    return (
      <div>
        <h4 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          {frontmatter.name}
        </h4>
        <em>
          <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
            {frontmatter.description}
          </p>
        </em>
        <Content>
          <TextWrapper
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <MDXRenderer>{body}</MDXRenderer>
            <div>{technologies}</div>
            <TechContainer>
              <a
                href={frontmatter.external}
                className="hvr-float-shadow"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </a>
            </TechContainer>
          </TextWrapper>
        </Content>
        <Break />
      </div>
    )
  })

  return (
    <Container id="projects">
      <ContentWrapper>
        <h1>PROJECTS</h1>
        {projects}
      </ContentWrapper>
    </Container>
  )
}
