import React from "react"
import RecentPosts from "./RecentPosts"
import Container from "../Container"
import styled from "styled-components"
import Goodreads from "../Goodreads"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const Note = styled.p`
  margin: 2rem;
  font-size: 0.8rem;
  text-align: center;
`

const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const InnerHeading = styled.p`
  margin-top: 5rem;
  text-align: center;
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

export default function Etc() {
  return (
    <Container id="me">
      <ContentWrapper>
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          ME
        </h1>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          I spend my free time hiking, playing the guitar, reading books,
          meditating, working out, listening to podcasts, geeking out to scifi
          stuffs, cooking, playing video games and traveling.{" "}
        </p>
        <InnerHeading
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          <strong>Books</strong> I've been reading recently{" "}
        </InnerHeading>

        <BookContainer>
          <Book>
            <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
              Currently Reading
            </p>

            <Goodreads index={0} />
          </Book>
        </BookContainer>
        <Note data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
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
        <RecentPosts />
      </ContentWrapper>
    </Container>
  )
}
