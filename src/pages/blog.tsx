import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import kebabCase from "lodash/kebabCase"
import "normalize.css"
import React from "react"
import styled from "styled-components"
import Container from "../components/Container"
import BookTag from "../components/icons/BookTag"
import Clock from "../components/icons/clock"
import JSTag from "../components/icons/JSTag"
import PhilosophyTag from "../components/icons/PhilosophyTag"
import ReactTag from "../components/icons/ReactTag"
import WebDevTag from "../components/icons/WebDevTag"
import Layout from "../components/Layout"

import SEO from "../components/Seo"

const StyledContainer = styled(Container)`
  margin: 6rem auto;
`

const ContentWrapper = styled.div`
  margin: auto 2rem;
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
  margin: 2rem 0rem;
  box-shadow: var(--boxShadow);
  width: 46%;
  background: var(--blog);
  border-radius: 3%;
  :nth-child(odd) {
    margin-right: 3rem;
  }

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

const Tags = styled.div`
  display: inline-block;
  margin: 1rem auto;
  font-weight: bold;
`
const TagLink = styled(Link)`
  padding: 0.5rem;
  margin: 0.5rem 0.5rem;
  background: var(--blog);
  border-radius: 5px;
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      description="Welcome to my blog. I write about web development, philosophy, books
          and anything that interests me."
      pathname="blog/"
      image={data.mainImg.childImageSharp.gatsbyImageData}
    />

    <StyledContainer>
      <ContentWrapper>
        <h1>BLOG</h1>

        <p>
          I write about Software, Philosophy, Books and anything that interests
          me.
        </p>

        <Tags>
          <TagLink
            className="hvr-float-shadow"
            to={`/tags/${kebabCase(data.tags.group[0].fieldValue)}/`}
          >
            <BookTag />
            {data.tags.group[0].fieldValue} ({data.tags.group[0].totalCount})
          </TagLink>
          <TagLink
            className="hvr-float-shadow"
            to={`/tags/${kebabCase(data.tags.group[1].fieldValue)}/`}
          >
            <JSTag />
            {data.tags.group[1].fieldValue} ({data.tags.group[1].totalCount})
          </TagLink>
          <TagLink
            className="hvr-float-shadow"
            to={`/tags/${kebabCase(data.tags.group[2].fieldValue)}/`}
          >
            <PhilosophyTag />
            {data.tags.group[2].fieldValue} ({data.tags.group[2].totalCount})
          </TagLink>
          <TagLink
            className="hvr-float-shadow"
            to={`/tags/${kebabCase(data.tags.group[3].fieldValue)}/`}
          >
            <ReactTag />
            {data.tags.group[3].fieldValue} ({data.tags.group[3].totalCount})
          </TagLink>
          <TagLink
            className="hvr-float-shadow"
            to={`/tags/${kebabCase(data.tags.group[3].fieldValue)}/`}
          >
            <WebDevTag />
            {data.tags.group[4].fieldValue} ({data.tags.group[4].totalCount})
          </TagLink>
          {/* <TagLink className="hvr-float-shadow" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </TagLink>
            <TagLink className="hvr-float-shadow" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </TagLink> */}
          {/* {data.tags.group.map(tag => (
          
            <TagLink className="hvr-float-shadow" to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </TagLink>
          
        ))} */}
        </Tags>

        <Wrapper>
          {data.allMdx.edges.map(({ node }) => (
            <Content className="hvr-grow-shadow" key={node.id}>
              <Link to={node.fields.slug}>
                <GatsbyImage
                  imgClassName="img"
                  image={node.frontmatter.image.childImageSharp.gatsbyImageData}
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
                  <p style={{ fontSize: "1rem" }}>{node.frontmatter.excerpt}</p>
                </TextWrapper>
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
  {
    mainImg: file(relativePath: { eq: "blog/frontend.png" }) {
      id
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
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
                gatsbyImageData(layout: FULL_WIDTH)
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
    tags: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
