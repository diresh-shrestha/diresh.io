import React from "react"
import Container from "../Container"
import styled from "styled-components"
import Github from "../icons/Github"
import External from "../icons/External"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

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
    width: 100%;
  }
  ul {
    display: inline-block;
  }
`
const TextWrapper = styled.p`
  width: 100%;
  min-height: 200px;
  margin: 0.5rem;
  text-align: justify;
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
  color: var(--textNormal);
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
      <Fade bottom>
        <div>
          <h4>{frontmatter.name}</h4>
          <em>
            <p>{frontmatter.description}</p>
          </em>
          <TechContainer>
            <div>{technologies}</div>
          </TechContainer>
          <Content direction={frontmatter.direction}>
            <Img
              style={{ margin: `0 auto` }}
              className="img"
              fluid={frontmatter.image.childImageSharp.fluid}
              imgStyle={{ objectFit: `contain`, objectPosition: `top` }}
            />

            <TextWrapper>
              <MDXRenderer>{body}</MDXRenderer>

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
      </Fade>
    )
  })

  return (
    <Container id="projects">
      <ContentWrapper>
        <Fade bottom>
          <h1>PROJECTS</h1>
        </Fade>
        {projects}
      </ContentWrapper>
    </Container>
  )
}
