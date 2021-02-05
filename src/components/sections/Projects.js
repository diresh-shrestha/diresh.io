import React from "react"
import Container from "../Container"
import styled from "styled-components"
import Github from "../icons/Github"
import External from "../icons/External"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  flex-direction: ${({ direction }) => direction};
  @media (max-width: 768px) {
    flex-direction: column;
  }
  .img {
    width: 80%;
    position: relative;
    border-radius: 10px;
  }
  ul {
    display: inline-block;
  }
`
const TextWrapper = styled.p`
  width: 100%;
  min-height: 200px;
  margin: 1rem auto;
`

const Technologies = styled.span`
  display: inline-block;
  border: solid;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
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

const LinkContainer = styled.div`
  display: flex;
  padding: 1rem 0;
`

const ExternalLink = styled.a`
  margin-right: 1rem;
`

const ImgContainer = styled.div``

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
        <Content direction={frontmatter.direction}>
          <Img
            style={{ margin: `0 auto` }}
            className="img"
            fluid={frontmatter.image.childImageSharp.fluid}
            imgStyle={{ objectFit: `contain`, objectPosition: `top` }}
          />

          <TextWrapper
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            <MDXRenderer>{body}</MDXRenderer>

            <TechContainer>
              <div>{technologies}</div>
            </TechContainer>
            <LinkContainer>
              <ExternalLink
                href={frontmatter.github}
                className="hvr-float-shadow"
                rel="noreferrer"
                target="_blank"
              >
                <Github />
              </ExternalLink>
              {frontmatter.external ? (
                <ExternalLink
                  href={frontmatter.external}
                  className="hvr-float-shadow"
                  rel="noreferrer"
                  target="_blank"
                >
                  <External />
                </ExternalLink>
              ) : null}
            </LinkContainer>
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
