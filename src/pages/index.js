import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { graphql } from "gatsby"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"

import Hero from "../components/Hero"
import Experience from "../components/sections/Experience"
import Latest from "../components/sections/Latest"
import Particles from "react-tsparticles"
import { Helmet } from "react-helmet"
import "normalize.css"

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <script src="https://cdn.rawgit.com/progers/pathseg/master/pathseg.js"></script>
    </Helmet>

    <SEO
      title="Home"
      image={data.mainImg.childImageSharp.resize}
      pathname="/"
    />

    <Particles
      style={{ position: `fixed` }}
      id="tsparticles"
      options={{
        backgroundMode: {
          enable: true,
          zIndex: -1,
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
            },
          },
          modes: {
            bubble: {
              distance: 250,
              duration: 2,
              opacity: 0,
              size: 0,
            },

            repulse: {
              distance: 200,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#808080",
          },
          opacity: {
            value: 0.5,
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: false,
          },
          move: {
            direction: "top",
            enable: true,
            outMode: "out",
            random: true,
            speed: 0.5,
          },
          number: {
            value: 80,
            density: {
              enable: false,
            },
          },

          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 2,
            anim: {
              speed: 4,
              size_min: 0.3,
            },
          },
        },
        detectRetina: true,
      }}
    />
    <Hero
      desktop={data.desktopHeroImg.childImageSharp.fluid}
      mobile={data.mobileHeroImg.childImageSharp.fluid}
    />

    <About content={data.about.edges} />
    <Experience content={data.experience.edges} />
    <Projects content={data.projects.edges} />
    <Latest />
  </Layout>
)

export default IndexPage

export const query = graphql`
  {
    about: allMdx(filter: { fileAbsolutePath: { regex: "/sections/About/" } }) {
      edges {
        node {
          body
          frontmatter {
            title
          }
        }
      }
    }
    experience: allMdx(
      filter: { fileAbsolutePath: { regex: "/sections/Experience/" } }
      sort: { fields: fileAbsolutePath }
    ) {
      edges {
        node {
          body
          frontmatter {
            title
            name
            external
            technologies
            date
            direction
            location
            image {
              childImageSharp {
                fluid(fit: CONTAIN) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
    projects: allMdx(
      filter: { fileAbsolutePath: { regex: "/sections/Projects/" } }
      sort: { fields: frontmatter___order }
    ) {
      edges {
        node {
          frontmatter {
            description
            external
            github
            name
            technologies
            direction
            image {
              childImageSharp {
                fluid(fit: CONTAIN) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
          body
        }
      }
    }
    desktopHeroImg: file(relativePath: { eq: "sections/Hero/hero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mainImg: file(relativePath: { eq: "sections/Main/Main.jpg" }) {
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
    mobileHeroImg: file(relativePath: { eq: "sections/Hero/hero_small.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
