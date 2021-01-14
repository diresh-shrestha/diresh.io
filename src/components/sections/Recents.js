import React from "react"
import Container from "../Container"
import styled from "styled-components"
import Goodreads from "../Goodreads"
import RecentPosts from "./RecentPosts"
import SpotifyPlayer from "react-spotify-web-playback"

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
          <strong>Songs</strong> I've been listening recently
        </InnerHeading>
        <SpotifyPlayer
          styles={{
            height: "100px",
            sliderHeight: 10,
            activeColor: "#e43f5a",
            bgColor: "#737777",
            color: "#fff",
            loaderColor: "#fff",
            sliderColor: "#1cb954",
            trackArtistColor: "#ccc",
            trackNameColor: "#fff",
          }}
          autoPlay={true}
          magnifySliderOnHover={true}
          initialVolume={0.2}
          token="BQAcob8YYkUrhrREHIctyI7czxLAzrozT9ykyJu2BWK8gIesySkIR8SIIIYC6WepgIynwunEB-wmlNGHk5AavN8iqtY6M_sh2Krw0Q_r8KlYm47IHCDzGo8aOdZT06YmGDYVTRqvcQeEmbT-PSVXUdWP6T2PKfN9yM2nPvV0L8i9aW4RgNJkLwttJhzBLQWllG6UKI2SX8Wz
  "
          uris={["spotify:playlist:4GXG9wicHVfQEDJFFYaUft"]}
        />
        ;
      </ContentWrapper>
    </Container>
  )
}
