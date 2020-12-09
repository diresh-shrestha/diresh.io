import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled(Container)`
  margin: 6rem auto;
`

const ContentWrapper = styled.div`
  margin: auto 2rem;
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO title="Blog" />
    <StyledContainer>
      <ContentWrapper>
        <h1 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          Hi
        </h1>
        <p data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          Welcome to my blog
        </p>
        <h4 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">
          {data.allMarkdownRemark.totalCount} Posts
        </h4>{" "}
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                {node.frontmatter.title}
                <span> - {node.frontmatter.date}</span>
              </h3>
              <p
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
              >
                {node.excerpt}
              </p>
            </Link>
          </div>
        ))}
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
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
