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
  border-radius: 3%;
  :nth-child(odd) {
    margin-right: 4rem;
  }
  .text {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Title = styled.h3`
  font-size: 1.3rem;
`

const InnerHeading = styled.p`
  margin-top: 5rem;
  text-align: center;
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
              excerpt
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
            style={{ borderRadius: `10px`, maxHeight: `250px` }}
            fluid={post.node.frontmatter.image.childImageSharp.fluid}
          />
          <Title
            style={{ marginTop: `1rem` }}
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            {post.node.frontmatter.title}
          </Title>
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
            {post.node.frontmatter.excerpt}
          </p>
        </Link>
      </Content>
    )
  })

  return (
    <Container>
      <ContentWrapper>
        <Link to={"/blog"}>
          <InnerHeading
            style={{ marginBottom: `2rem` }}
            data-sal="slide-up"
            data-sal-delay="100"
            data-sal-easing="ease"
          >
            Recent <strong>Blog</strong> posts
          </InnerHeading>
        </Link>

        <Wrapper>{posts}</Wrapper>
      </ContentWrapper>
    </Container>
  )
}
