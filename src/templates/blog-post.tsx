import { MDXProvider } from "@mdx-js/react"
import { graphql } from "gatsby"
import { CommentCount, Disqus } from "gatsby-plugin-disqus"
import { GatsbyImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment"
import "normalize.css"
import React from "react"
import ProgressBar from "react-scroll-progress-bar"
import styled from "styled-components"
import CodeBlock from "../components/CodeBlock"
import Clock from "../components/icons/clock"
import Layout from "../components/Layout"
import Newsletter from "../components/Newsletter"
import Scroll from "../components/Scroll"
import SEO from "../components/Seo"
import TableOfContents from "../components/TableOfContents"

const BlogContainer = styled.div`
  max-width: 1200px;
  margin: 5rem auto;
  @media (max-width: 1024px) {
    max-width: 800px;
  }
`

const ContentWrapper = styled.div`
  margin: auto 1.5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    margin: 2rem 0;
  }
  img {
    display: block;
    margin: 2rem auto;
    border-radius: 10px;
  }
  p {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
  ul,
  ol {
    color: var(--textNormal);
  }

  blockquote {
    font-size: 1.375rem;
    border-radius: 10px;
    line-height: 1.55;
    margin-bottom: 55px !important;
    background: 0 0;
    border: none;
    border: 2px solid #696969;
    -webkit-box-shadow: 6px 6px 0 0 #696969;
    box-shadow: 6px 6px 0 0 #696969;
  }

  code {
    color: rgb(248, 248, 242);
    background-color: rgb(39, 40, 34);
    padding: 2px;
    border-radius: 5px;
  }
`

const TitleContainer = styled.div`
  text-align: left;
  margin-top: 8rem;
  margin-bottom: 5rem;
`

const SubTitle = styled.p`
  font-size: 1rem;
`

const ShareButton = styled.div`
  display: flex;
  float: right;
`

const Excerpt = styled.p`
  margin: 0.5rem 0;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  padding: 1rem;
`

const TOC = styled.div`
  position: sticky;
  float: right;
  top: 100px;
  padding: 0.5rem;
  margin: 1rem;
  margin-top: 50rem;
  max-height: calc(100vh - 148px);
  overflow: auto;
  max-width: 300px;

  @media (max-width: 1024px) {
    display: none;
  }
  ul {
    list-style: none;
  }
  font-size: 0.8rem;
  h3 {
    margin-top: 0;
  }
`

export default function BlogPost({ data }) {
  const siteUrl = "https://www.diresh.io/"
  const post = data.post
  // const image = data.mainImg.childImageSharp.resize
  //   ? post.frontmatter.featured.childImageSharp.gatsbyImageData
  //   : null
  let disqusConfig = {
    url: `${siteUrl + post.frontmatter.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  const components = {
    pre: CodeBlock,
  }
  const Date = moment(post.frontmatter.date, "YYYY/MM/DD").format(
    "MMMM Do YYYY"
  )
  return (
    <Layout style={{ display: `flex`, flexDirection: `column` }}>
      <ProgressBar style={{ zIndex: `100` }} />
      <Scroll />

      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.frontmatter.excerpt}
        image={data.mainImg.childImageSharp.resize}
        pathname={post.frontmatter.slug}
      />

      <BlogContainer>
        <TOC>
          {post.tableOfContents?.items && (
            <TableOfContents items={post.tableOfContents.items} />
          )}
        </TOC>
        <ContentWrapper>
          <TitleContainer>
            <h1 style={{ margin: `0.5rem auto` }}>{post.frontmatter.title}</h1>
            <em>
              <SubTitle>
                Published: {Date}, <Clock /> {post.timeToRead} min read
              </SubTitle>
              <CommentCount
                style={{ color: `var(--textNormal)` }}
                config={disqusConfig}
              />
            </em>
            <Excerpt>{post.frontmatter.excerpt}</Excerpt>
            {/* <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                margin: `1rem`,
              }}
              class="s9-widget-wrapper"
            ></div> */}
          </TitleContainer>

          <GatsbyImage image={image} />
          <Content>
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
            <Newsletter />
            <Disqus config={disqusConfig} />
          </Content>
        </ContentWrapper>
      </BlogContainer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    post: mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        date
        slug
        title
        excerpt
        description
        tags
        featured {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
      tableOfContents
      timeToRead
    }
    mainImg: mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        featured {
          childImageSharp {
            resize(height: 500, width: 600) {
              src
              tracedSVG
              width
              height
              aspectRatio
              originalName
            }
          }
        }
      }
    }
  }
`
