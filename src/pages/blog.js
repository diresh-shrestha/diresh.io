import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Clock from "../components/icons/clock"
import Img from "gatsby-image"
import Particles from "react-tsparticles"

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
  padding: 1rem;
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
`

const Date = styled.p`
  font-size: 1rem;
`

const Title = styled.h3`
  font-size: 1.3rem;
`

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      description="Welcome to my blog. I write about web development, philosophy, books
          and anything that interests me."
      pathname="blog/"
      image={data.mainImg.childImageSharp.fluid}
    />

    <Particles
      style={{ position: `fixed` }}
      id="tsparticles"
      options={{
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#C0C0C0",
          },
          links: {
            color: "#C0C0C0",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
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
                  style={{ borderRadius: `10px`, maxHeight: `250px` }}
                  fluid={node.frontmatter.image.childImageSharp.fluid}
                />
                <Title
                  data-sal="slide-up"
                  data-sal-delay="100"
                  data-sal-easing="ease"
                >
                  {node.frontmatter.title}
                </Title>
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
                  {node.frontmatter.excerpt}
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
    mainImg: file(relativePath: { eq: "blog/frontend.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
`
