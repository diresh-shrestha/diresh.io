import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import SEO from "../components/Seo"
import Clock from "../components/icons/clock"
import Particles from "react-tsparticles"
import "normalize.css"
import ProgressBar from "react-scroll-progress-bar"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/CodeBlock"
import TableOfContents from "../components/TableOfContents"
import Scroll from "../components/Scroll"
import Img from "gatsby-image"
const ContentWrapper = styled.div`
  margin: auto 1.5rem;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;

  h1 {
    margin: 2rem 0;
  }
  img {
    display: block;
    margin: 2rem auto;
    border-radius: 10px;
  }
  p {
    margin-bottom: 2rem;
  }
  ul,
  ol {
    color: var(--textNormal);
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
  text-align: left;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  float: left;
  padding: 1rem;
`

const TOC = styled.div`
  position: sticky;
  float: left;
  top: 100px;
  padding: 1rem;
  margin: 2rem;
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
  const components = {
    pre: CodeBlock,
  }

  const siteUrl = "https://www.diresh.io/"
  const post = data.mdx
  const image = post.frontmatter.image
    ? post.frontmatter.image.childImageSharp.resize
    : null
  let disqusConfig = {
    url: `${siteUrl + post.frontmatter.slug}`,
    identifier: post.id,
    title: post.frontmatter.title,
  }
  console.log(post.frontmatter.slug)
  return (
    <Layout style={{ display: `flex`, flexDirection: `column` }}>
      <ProgressBar style={{ zIndex: `100` }} />
      <Scroll />

      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.frontmatter.excerpt}
        image={image}
        pathname={post.frontmatter.slug}
      />

      <Particles
        style={{ position: `fixed`, zIndex: `-1` }}
        id="tsparticles"
        options={{
          particles: {
            number: {
              value: 355,
              density: {
                enable: true,
                value_area: 789.1476416322727,
              },
            },
            color: {
              value: "#808080",
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000",
              },
              polygon: {
                nb_sides: 5,
              },
            },
            opacity: {
              value: 0.48927153781200905,
              random: false,
              anim: {
                enable: true,
                speed: 0.2,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 2,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0,
                sync: false,
              },
            },
            links: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 0.2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
              },
              onClick: {
                enable: true,
                mode: "push",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 83.91608391608392,
                size: 1,
                duration: 3,
                opacity: 1,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                quantity: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
      <TOC>
        {post.tableOfContents?.items && (
          <TableOfContents items={post.tableOfContents.items} />
        )}
      </TOC>

      <Container>
        <ContentWrapper>
          <TitleContainer>
            <h1 style={{ margin: `0.5rem auto` }}>{post.frontmatter.title}</h1>
            <em>
              <SubTitle>
                Published: {post.frontmatter.date}, <Clock /> {post.timeToRead}{" "}
                min read
              </SubTitle>
              <CommentCount
                style={{ color: `var(--textNormal)` }}
                config={disqusConfig}
              />
            </em>
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                margin: `1rem`,
              }}
              class="s9-widget-wrapper"
            ></div>
          </TitleContainer>
          <Excerpt>{post.frontmatter.excerpt}</Excerpt>

          <Content>
            <MDXProvider components={components}>
              <MDXRenderer>{post.body}</MDXRenderer>
            </MDXProvider>
          </Content>

          <Content>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.buymeacoffee.com/diresh"
            >
              <img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=diresh&button_colour=FF5F5F&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00" />
            </a>
            <Disqus config={disqusConfig} />
          </Content>
        </ContentWrapper>
      </Container>
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

    mdx(
      fileAbsolutePath: { regex: "/blog/" }
      fields: { slug: { eq: $slug } }
    ) {
      body
      frontmatter {
        date
        slug
        title
        excerpt
        description
        tags

        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      tableOfContents
      timeToRead
    }
  }
`
