import React from "react"
import Container from "../Container"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Goodreads from "../Goodreads"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const BookContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
const Book = styled.div`
  margin: 0rem 3rem;
  @media (max-width: 425px) {
    margin: 0;
  }
`

const Note = styled.p`
  font-size: 0.8rem;
`

export default function About({ content }) {
  const { frontmatter, body } = content[0].node
  return (
    <Container id="about">
      <ContentWrapper>
        <h1>{frontmatter.title}</h1>
        <p>
          <MDXRenderer>{body}</MDXRenderer>
        </p>

        <BookContainer>
          <Book>
            <h3>Currently Reading</h3>

            <Goodreads index={0} />
          </Book>
          <Book>
            <h3>Last Read</h3>

            <Goodreads index={1} />
          </Book>
        </BookContainer>
        <Note>
          * Books pulled from my Goodreads library using the{" "}
          <a
            href="https://www.goodreads.com/api"
            rel="noreferrer"
            target="_blank"
          >
            Goodreads API
          </a>
        </Note>
      </ContentWrapper>
    </Container>
  )
}
