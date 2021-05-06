import React from "react"
import PropTypes from "prop-types"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"
import Clock from "../components/icons/clock"

// Components
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const StyledContainer = styled(Container)`
  margin: 6rem auto;
`

const ContentWrapper = styled.div`
  margin: auto 1rem;
  max-width: 1100px;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-top: 2rem;
`

const Content = styled.div`
  margin: 2rem 1rem;
  box-shadow: var(--boxShadow);
  width: 45%;

  background: var(--blog);
  border-radius: 3%;

  .text {
    margin-top: 1rem;
  }
  @media (max-width: 830px) {
    width: 100%;
    margin: 2rem 0rem;
    :nth-child(odd) {
      margin-right: 0rem;
    }
  }

  .img {
    border-radius: 10px;
    max-height: 250px;
  }
`

const TextWrapper = styled.div`
  padding: 1rem;
`

const Date = styled.p`
  font-size: 1rem;
`

const Title = styled.h3`
  font-size: 1.3rem;
  margin-top: 0.5rem;
`

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Layout>
      <StyledContainer>
        <ContentWrapper>
          <Wrapper>
            <h1>{tagHeader}</h1>
            {edges.map(({ node }) => (
              <Content className="hvr-grow-shadow" key={node.id}>
                <Link to={node.fields.slug}>
                  <GatsbyImage
                    image={
                      node.frontmatter.featured.childImageSharp.gatsbyImageData
                    }
                    imgClassName="img"
                  />
                  <TextWrapper>
                    <Title>{node.frontmatter.title}</Title>
                    <em>
                      <Date>
                        {" "}
                        {node.frontmatter.date}, <Clock /> {node.timeToRead} min
                        read
                      </Date>
                    </em>
                    <p style={{ fontSize: "1rem" }}>
                      {node.frontmatter.excerpt}
                    </p>
                  </TextWrapper>
                </Link>
              </Content>
            ))}
            {/*
              This links to a page that does not yet exist.
              You'll come back to it!
            */}
          </Wrapper>
        </ContentWrapper>
      </StyledContainer>
    </Layout>
  )
}

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMdx: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            excerpt
            featured {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
