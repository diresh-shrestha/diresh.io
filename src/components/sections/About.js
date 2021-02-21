import React from "react"
import Container from "../Container"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import GitHubCalendar from "react-github-calendar"
import ReactTooltip from "react-tooltip"
import Fade from "react-reveal/Fade"

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
  text-align: justify;
`

const InnerHeading = styled.p`
  margin-top: 5rem;
  margin-bottom: 1rem;
  text-align: center;
`

export default function About({ content }) {
  const exampleTheme = {
    background: "transparent",
    text: "grey",
    grade4: "hsl(338, 78%, 30%)",
    grade3: "hsl(338, 78%, 44%)",
    grade2: "hsl(338, 78%, 58%)",
    grade1: "hsl(338, 78%, 72%)",
    grade0: "#eee",
  }
  const { frontmatter, body } = content[0].node
  return (
    <Wrapper id="about">
      <ContentWrapper>
        <Fade bottom>
          <h1>{frontmatter.title}</h1>

          <Content>
            <p>
              <MDXRenderer>{body}</MDXRenderer>
            </p>
          </Content>
        </Fade>
        <Fade bottom>
          <h3 style={{ textAlign: `center` }}>SKILLS</h3>
          <Skills />
        </Fade>
        <Fade bottom>
          <h3 style={{ textAlign: `center`, marginBottom: `2rem` }}>COMMITS</h3>
          <GitHubCalendar
            style={{ textAlign: `center`, color: `grey` }}
            theme={exampleTheme}
            username="diresh-shrestha"
            fullYear={false}
            blockSize={15}
            blockMargin={4}
            color="#2098d1"
          >
            <ReactTooltip delayShow={50} html />
          </GitHubCalendar>
        </Fade>
      </ContentWrapper>
    </Wrapper>
  )
}
