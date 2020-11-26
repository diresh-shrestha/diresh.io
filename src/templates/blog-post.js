import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <Container>
        <ContentWrapper>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </ContentWrapper>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
