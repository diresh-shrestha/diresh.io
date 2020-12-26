import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Clock from "../components/icons/clock"
import Img from "gatsby-image"

const StyledContainer = styled(Container)`
  margin: 6rem auto;
`

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-top: 2rem;
`

const Content = styled.div`
  margin: 5rem 0rem;
  box-shadow: var(--boxShadow);
  width: 50%;
  padding: 1rem;
  background: var(--blog);
  border-radius: 10%;
  margin-right: 1rem;
  .text {
    margin-top: 1rem;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`

const Date = styled.p`
  font-size: 1rem;
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" pathname="blog/" />
    <StyledContainer>
      <ContentWrapper>
        <h1 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          BLOG
        </h1>
        <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          Welcome to my blog. I write about web development, philosophy, books
          and anything that interests me.
        </p>
        <h4 data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease">
          {data.allMarkdownRemark.totalCount} Posts
        </h4>{" "}
        <Wrapper>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <Content className="hvr-float-shadow" key={node.id}>
              <Link to={node.fields.slug}>
                <Img
                  style={{ borderRadius: `10px` }}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <h3
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                >
                  {node.frontmatter.title}
                </h3>
                <em>
                  <Date
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease"
                  >
                    {" "}
                    {node.frontmatter.date}, <Clock /> {node.timeToRead} min
                    read
                  </Date>
                </em>
                <p
                  style={{ fontSize: "1rem" }}
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                >
                  {node.excerpt}
                </p>
              </Link>
            </Content>
          ))}
        </Wrapper>
      </ContentWrapper>
    </StyledContainer>
  </Layout>
)

export default BlogPage

export const query = graphql`
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
`
