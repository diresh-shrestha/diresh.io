import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Container from "../components/Container"
import styled from "styled-components"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"
import SEO from "../components/Seo"
import Clock from "../components/icons/clock"
import Particles from "react-tsparticles"
import "normalize.css"
import { CircleArrow as ScrollUpButton } from "react-scroll-up-button"

const ContentWrapper = styled.div`
  margin: auto 1.5rem;
`

const Content = styled.div`
  h2 {
    margin: 3rem auto;
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
  em {
    font-size: 0.9rem;
  }
`

const TitleContainer = styled.div`
  text-align: center;
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

export default function BlogPost({ data }) {
  const image = data.markdownRemark.frontmatter.image.childImageSharp.resize
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
      <ScrollUpButton
        ContainerClassName="scroll-top-button-container"
        TransitionClassName="scroll-top-button-transition"
        ShowAtPosition={300}
        AnimationDuration={200}
        style={{ zIndex: `2`, bottom: `5rem` }}
      ></ScrollUpButton>
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
            <div
              style={{
                display: `flex`,
                justifyContent: `center`,
                margin: `1rem`,
              }}
              class="s9-widget-wrapper"
            ></div>
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
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        excerpt
        description
        image {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
      timeToRead
    }
  }
`
