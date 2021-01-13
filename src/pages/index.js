import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { graphql } from "gatsby"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import RecentPosts from "../components/sections/RecentPosts"

import Hero from "../components/Hero"
import Experience from "../components/sections/Experience"
import Me from "../components/sections/Me"
import Particles from "react-tsparticles"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      image={data.mainImg.childImageSharp.resize}
      pathname="/"
    />
    <Particles
      style={{ position: `fixed` }}
      id="tsparticles"
      options={{
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
              distance: 400,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: "#C0C0C0",
          },

          collisions: {
            enable: false,
          },
          line_linked: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 1,
          },
          number: {
            value: 160,
            density: {
              enable: false,
            },
          },

          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 3,
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
    <Me />
    <RecentPosts />
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
      filter: {
        fileAbsolutePath: { regex: "/sections/Projects/RaiderMatcher/" }
      }
    ) {
      edges {
        node {
          frontmatter {
            description
            external
            name
            technologies
          }
          body
        }
      }
    }
    desktopHeroImg: file(relativePath: { eq: "sections/Hero/hero.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
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
    mobileHeroImg: file(relativePath: { eq: "sections/Hero/hero_small.webp" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
