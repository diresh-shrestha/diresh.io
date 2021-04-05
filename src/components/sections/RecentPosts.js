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

const TextWrapper = styled.div`
  padding: 1rem;
`

const Title = styled.h3`
  font-size: 1.3rem;
  margin-top: 0.5rem;
`

const InnerHeading = styled.p`
  margin-top: 5rem;
  text-align: center;
`

export default function RecentPosts() {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: [frontmatter___date], order: DESC }, skip: 5) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date
              excerpt
              image: featured {
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

  const edges = data.allMdx.edges
  const node = edges.slice(0, 2)

  const posts = node.map(post => {
    const siteUrl = "https://www.diresh.io/"

    let disqusConfig = {
      url: `${siteUrl + post.node.fields.slug}`,
      identifier: post.node.id,
      title: post.node.frontmatter.title,
    }
    return (
      <Content className="hvr-grow-shadow">
        <Link to={post.node.fields.slug}>
          <Img
            style={{ borderRadius: `10px`, maxHeight: `250px` }}
            fluid={post.node.frontmatter.image.childImageSharp.fluid}
          />
          <TextWrapper>
            <Title>{post.node.frontmatter.title}</Title>
            <em>
              <p style={{ fontSize: `1rem` }}>
                {post.node.frontmatter.date}, <Clock /> {post.node.timeToRead}{" "}
                min read
              </p>
            </em>
            <p style={{ fontSize: `1rem` }} className="text">
              {post.node.frontmatter.excerpt}
            </p>
          </TextWrapper>
        </Link>
      </Content>
    )
  })

  return (
    <Container>
      <ContentWrapper>
        <Link to={"/blog"}>
          <h3 style={{ textAlign: `center` }}>BLOG POSTS</h3>
        </Link>

        <Wrapper>{posts}</Wrapper>
      </ContentWrapper>
    </Container>
  )
}
