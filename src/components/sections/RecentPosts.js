import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Container from "../Container"

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const Content = styled.div`
  width: 50%;
  margin-right: 2rem;
  .text {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

export default function RecentPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM, YYYY")
            }
            fields {
              slug
            }
            excerpt
          }
        }
      }
    }
  `)

  const edges = data.allMarkdownRemark.edges
  const node = edges.slice(0, 2)

  const posts = node.map(post => {
    return (
      <Content>
        <Link to={post.node.fields.slug}>
          <h3>{post.node.frontmatter.title}</h3>
        </Link>
        <em>
          <p>{post.node.frontmatter.date}</p>
        </em>
        <p className="text">{post.node.excerpt}</p>
      </Content>
    )
  })

  return (
    <Container>
      <ContentWrapper>
        <h1>RECENT POSTS</h1>
        <Wrapper>{posts}</Wrapper>
      </ContentWrapper>
    </Container>
  )
}
