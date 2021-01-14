import React from "react"
import Container from "../Container"
import styled from "styled-components"
import Goodreads from "../Goodreads"
import RecentPosts from "./RecentPosts"

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
  margin: 0rem auto;
  p {
    margin-top: 1rem;
  }
  @media (max-width: 425px) {
    margin: 0;
  }
  img {
    border-radius: 3%;
    margin: 1rem;
  }
`

const TitleContainer = styled.div`
  margin: auto 2rem;
`

const SpotifyPlayer = styled.iframe`
  margin-top: 1rem;
  width: 100%;
  height: 300px;
  border-radius: 10px;
`

export default function Etc() {
  return (
    <Container id="recents">
      <TitleContainer>
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          RECENTS
        </h1>
      </TitleContainer>
      <RecentPosts />
      <ContentWrapper>
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
            <Goodreads index={1} />
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
        <InnerHeading
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          <strong>Podcasts</strong> I've been listening to recently
        </InnerHeading>
        <iframe
          style={{ marginTop: `1rem` }}
          title="podcast"
          src="https://open.spotify.com/embed-podcast/episode/0SOWJINQ4SDbWsQjncgBz6"
          width="100%"
          height="232"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
        <InnerHeading
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          <strong>Songs</strong> I've been listening to recently
        </InnerHeading>
        <SpotifyPlayer
          title="topPlaylist"
          src="https://open.spotify.com/embed/playlist/4GXG9wicHVfQEDJFFYaUft"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></SpotifyPlayer>
        ;
      </ContentWrapper>
    </Container>
  )
}
