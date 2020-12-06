import React from "react"
import Container from "../Container"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Goodreads from "../Goodreads"
import AboutPic from "../../images/About.jpg"

import Skills from "../icons/Skills"

const Wrapper = styled(Container)`
  @media (max-width: 768px) {
    margin-top: 30rem;
  }
`

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const Book = styled.div`
  margin: 0rem 3rem;
  p {
    margin-top: 1rem;
  }
  @media (max-width: 425px) {
    margin: 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: row-reverse;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Note = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
`

const AboutImg = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 1rem;
  @media (max-width: 768px) {
    margin: 2rem auto;
  }
  @media (max-width: 375px) {
    width: 200px;
    height: 200px;
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
        <h1>{frontmatter.title}</h1>

        <Content>
          <AboutImg className="hvr-float-shadow" src={AboutPic} alt="" />

          <p>
            <MDXRenderer>{body}</MDXRenderer>
          </p>
        </Content>
        <InnerHeading>
          <strong>Technologies</strong> I've been using recently
        </InnerHeading>
        <Skills />

        <InnerHeading>
          <strong>Books</strong> I've been reading recently{" "}
        </InnerHeading>

        <BookContainer>
          <Book>
            <p>Currently Reading</p>

            <Goodreads index={0} />
          </Book>
          <Book>
            <p>Last Read</p>

            <Goodreads index={1} />
          </Book>
        </BookContainer>
        <Note>
          * Books pulled from my Goodreads library using the{" "}
          <a
            className="hvr-underline-from-left"
            href="https://www.goodreads.com/api"
            rel="noreferrer"
            target="_blank"
          >
            Goodreads API
          </a>
        </Note>
      </ContentWrapper>
    </Wrapper>
  )
}
