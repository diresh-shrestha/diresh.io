import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background: var(--containerBackground);
  border-radius: 20px;
  margin: 2rem auto;
  max-width: 960px;
  padding: 1rem;
  h1 {
    margin: 2rem auto;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`
export default Container
