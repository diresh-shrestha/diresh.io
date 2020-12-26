import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import styled from "styled-components"
import Container from "../Container"
import Clock from "../icons/clock"
import Img from "gatsby-image"

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
  box-shadow: var(--boxShadow);
  margin: 1rem 0rem;
  width: 50%;
  padding: 1rem;
  background: var(--blog);
  border-radius: 10%;
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
              image {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
            fields {
              slug
            }
            excerpt
            timeToRead
          }
        }
      }
    }
  `)

  const edges = data.allMarkdownRemark.edges
  const node = edges.slice(0, 2)

  const posts = node.map(post => {
    const siteUrl = "https://www.diresh.io/"

    let disqusConfig = {
      url: `${siteUrl + post.node.fields.slug}`,
      identifier: post.node.id,
      title: post.node.frontmatter.title,
    }
    return (
      <Content className="hvr-float-shadow">
        <Link to={post.node.fields.slug}>
          <Img
            style={{ borderRadius: `10px` }}
            fluid={post.node.frontmatter.image.childImageSharp.fluid}
          />
          <h3
            style={{ marginTop: `1rem` }}
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            {post.node.frontmatter.title}
          </h3>
          <em>
            <p
              style={{ fontSize: `1rem` }}
              data-sal="slide-up"
              data-sal-delay="100"
              data-sal-easing="ease"
            >
              {post.node.frontmatter.date}, <Clock /> {post.node.timeToRead} min
              read
            </p>
          </em>
          <p
            style={{ fontSize: `1rem` }}
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
            className="text"
          >
            {post.node.excerpt}
          </p>
        </Link>
      </Content>
    )
  })

  return (
    <Container>
      <ContentWrapper>
        <h2
          style={{ marginBottom: `2rem` }}
          data-sal="slide-up"
          data-sal-delay="100"
          data-sal-easing="ease"
        >
          RECENT POSTS
        </h2>
        <Wrapper>{posts}</Wrapper>
      </ContentWrapper>
    </Container>
  )
}
