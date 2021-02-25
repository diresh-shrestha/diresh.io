import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import Container from "../components/Container"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Clock from "../components/icons/clock"
import Img from "gatsby-image"
import Particles from "react-tsparticles"
import "normalize.css"
import kebabCase from "lodash/kebabCase"
import BookTag from "../components/icons/BookTag"
import ReactTag from "../components/icons/ReactTag"
import WebDevTag from "../components/icons/WebDevTag"
import PhilosophyTag from "../components/icons/PhilosophyTag"
import Fade from "react-reveal/Fade"

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

const Tags = styled.div`
  display: inline-block;
  margin: 1rem auto;
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
      image={data.mainImg.childImageSharp.fluid}
    />

    <Particles
      style={{ position: `fixed` }}
      id="tsparticles"
      options={{
        autoPlay: true,

        detectRetina: true,
        fpsLimit: 30,
        infection: {
          cure: false,
          delay: 0,
          enable: false,
          infections: 0,
          stages: [],
        },
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onDiv: {
              selectors: [],
              enable: false,
              mode: [],
              type: "circle",
            },
            onHover: {
              enable: true,
              mode: "attract",
              parallax: {
                enable: false,
                force: 2,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            attract: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            bounce: {
              distance: 200,
            },
            bubble: {
              distance: 400,
              duration: 0.3,
              opacity: 1,
              size: 4,
            },
            connect: {
              distance: 80,
              links: {
                opacity: 0.5,
              },
              radius: 60,
            },
            grab: {
              distance: 400,
              links: {
                blink: false,
                consent: false,
                opacity: 0.5,
              },
            },
            light: {
              area: {
                gradient: {
                  start: {
                    value: "#ffffff",
                  },
                  stop: {
                    value: "#000000",
                  },
                },
                radius: 1000,
              },
              shadow: {
                color: {
                  value: "#000000",
                },
                length: 2000,
              },
            },
            push: {
              quantity: 4,
            },
            remove: {
              quantity: 2,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
              speed: 1,
            },
            slow: {
              factor: 3,
              radius: 200,
            },
            trail: {
              delay: 1,
              quantity: 1,
            },
          },
        },
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: false,
          },
        },
        particles: {
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          collisions: {
            bounce: {
              horizontal: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            enable: false,
            mode: "bounce",
          },
          color: {
            value: "#808080",
            animation: {
              enable: false,
              speed: 1,
              sync: true,
            },
          },

          move: {
            angle: {
              offset: 45,
              value: 90,
            },
            attract: {
              enable: false,
              rotate: {
                x: 600,
                y: 1200,
              },
            },
            direction: "bottom",
            distance: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: false,
              maxSpeed: 50,
            },
            noise: {
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
              },
              enable: false,
            },
            outModes: {
              default: "out",
              bottom: "out",
              left: "out",
              right: "out",
              top: "out",
            },
            random: false,
            size: false,
            speed: 1,
            straight: false,
            trail: {
              enable: false,
              length: 10,
              fillColor: {
                value: "#000000",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 2000,
              factor: 2000,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: 0.5,
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
          },
          reduceDuplicates: false,
          rotate: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            animation: {
              enable: false,
              speed: 0,
              sync: false,
            },
            direction: "clockwise",
            path: false,
          },
          shadow: {
            blur: 0,
            color: {
              value: "#000000",
            },
            enable: false,
            offset: {
              x: 0,
              y: 0,
            },
          },
          shape: {
            options: {
              polygon: {
                nb_sides: 5,
              },
              star: {
                nb_sides: 5,
              },
              image: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
              images: {
                src: "https://cdn.matteobruni.it/images/particles/github.svg",
                width: 100,
                height: 100,
              },
            },
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: 5,
            animation: {
              destroy: "none",
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              startValue: "max",
              sync: false,
            },
          },
          stroke: {
            width: 0,
            color: {
              value: "#000000",
              animation: {
                enable: false,
                speed: 1,
                sync: true,
              },
            },
          },
          twinkle: {
            lines: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
            particles: {
              enable: false,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: false,
        themes: [],
      }}
    />
    <StyledContainer>
      <ContentWrapper>
        <Fade bottom>
          <h1>BLOG</h1>

          <p>
            Welcome to my blog. I write about web development, philosophy, books
            and anything that interests me.
          </p>
          <h4>Total {data.allMdx.totalCount} Posts</h4>
          <h4>
            Tags:
            <Tags>
              <TagLink
                className="hvr-float-shadow"
                to={`/tags/${kebabCase(data.tags.group[0].fieldValue)}/`}
              >
                <BookTag />
                {data.tags.group[0].fieldValue} ({data.tags.group[0].totalCount}
                )
              </TagLink>
              <TagLink
                className="hvr-float-shadow"
                to={`/tags/${kebabCase(data.tags.group[1].fieldValue)}/`}
              >
                <PhilosophyTag />
                {data.tags.group[1].fieldValue} ({data.tags.group[1].totalCount}
                )
              </TagLink>
              <TagLink
                className="hvr-float-shadow"
                to={`/tags/${kebabCase(data.tags.group[2].fieldValue)}/`}
              >
                <ReactTag />
                {data.tags.group[2].fieldValue} ({data.tags.group[2].totalCount}
                )
              </TagLink>
              <TagLink
                className="hvr-float-shadow"
                to={`/tags/${kebabCase(data.tags.group[3].fieldValue)}/`}
              >
                <WebDevTag />
                {data.tags.group[3].fieldValue} ({data.tags.group[3].totalCount}
                )
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
          </h4>
        </Fade>
        <Fade bottom>
          <Wrapper>
            {data.allMdx.edges.map(({ node }) => (
              <Content className="hvr-float-shadow" key={node.id}>
                <Link to={node.fields.slug}>
                  <Img
                    style={{ borderRadius: `10px`, maxHeight: `250px` }}
                    fluid={node.frontmatter.image.childImageSharp.fluid}
                  />
                  <Title>{node.frontmatter.title}</Title>
                  <em>
                    <Date>
                      {" "}
                      {node.frontmatter.date}, <Clock /> {node.timeToRead} min
                      read
                    </Date>
                  </em>
                  <p style={{ fontSize: "1rem" }}>{node.frontmatter.excerpt}</p>
                </Link>
              </Content>
            ))}
          </Wrapper>
        </Fade>
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, skip: 5) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
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
    tags: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
