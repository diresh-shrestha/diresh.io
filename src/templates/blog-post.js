import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import SEO from "../components/Seo"

const ContentWrapper = styled.div`
  margin: auto 2rem;
`
export default function BlogPost({ data }) {
  const siteUrl = "https://www.diresh.io/"
  const post = data.markdownRemark
  let disqusConfig = {
    url: `${siteUrl + post.frontmatter.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  console.log(post.frontmatter.slug)
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        // image={image}
        pathname={post.frontmatter.slug}
      />
      <Container>
        <ContentWrapper>
          <h1>{post.frontmatter.title}</h1>
          <h2>{post.frontmatter.date}</h2>
          <CommentCount config={disqusConfig} />
          <div
            style={{ marginBottom: `10rem` }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <Disqus config={disqusConfig} />
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
