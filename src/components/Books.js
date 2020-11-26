import React from "react"
import Container from "./Container"
import Goodreads from "./Goodreads"
import styled from "styled-components"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

export default function Books() {
  return (
    <Container id="books">
      <ContentWrapper>
        <h1>Books</h1>
        <Goodreads index={0} />
        <Goodreads index={1} />
      </ContentWrapper>
    </Container>
  )
}
