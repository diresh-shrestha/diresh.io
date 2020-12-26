import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import SEO from "../components/Seo"
import Clock from "../components/icons/clock"

const ContentWrapper = styled.div`
  margin: auto 1.5rem;
`

const Content = styled.div`
  h2 {
    margin: 3rem auto;
  }
  img {
    margin: 2rem auto;
    border-radius: 10px;
  }
  p {
    margin-bottom: 2rem;
  }
  ul {
    color: var(--textNormal);
  }
`

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 2rem;
`

const SubTitle = styled.p`
  font-size: 1rem;
`

export default function BlogPost({ data }) {
  const image = data.markdownRemark.frontmatter.image.childImageSharp.fluid
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
        image={image}
        pathname={post.frontmatter.slug}
      />
      <Container>
        <ContentWrapper>
          <TitleContainer>
            <h1
              style={{ margin: `0.5rem auto` }}
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
            >
              {post.frontmatter.title}
            </h1>
            <em>
              <SubTitle
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                Published: {post.frontmatter.date}, <Clock /> {post.timeToRead}{" "}
                min read
              </SubTitle>
              <CommentCount
                style={{ color: `var(--textNormal)` }}
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                config={disqusConfig}
              />
            </em>
          </TitleContainer>

          <Content
            style={{ marginBottom: `10rem`, marginTop: `2rem` }}
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
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
    }
  }
`
