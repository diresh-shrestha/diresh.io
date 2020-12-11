import React from "react"

import Layout from "../components/Layout"
import Image from "../components/Image"
import SEO from "../components/Seo"
import { graphql } from "gatsby"
import About from "../components/sections/About"
import Projects from "../components/sections/Projects"
import Typer from "../components/Typer"
import Container from "../components/Container"
import Hero from "../components/Hero"
import Experience from "../components/sections/Experience"
import RecentPosts from "../components/sections/RecentPosts"
import SEOImage from "../images/hero.jpg"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO />
    <Hero desktop={data.desktopHeroImg.childImageSharp.fluid} />
    <About content={data.about.edges} />
    <Experience content={data.experience.edges} />
    <Projects content={data.projects.edges} />
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
            image {
              childImageSharp {
                fluid(fit: CONTAIN) {
                  ...GatsbyImageSharpFluid
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
    desktopHeroImg: file(relativePath: { eq: "sections/Hero/hero.jpg" }) {
      childImageSharp {
        fluid(jpegQuality: 100, maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mobileHeroImg: file(relativePath: { eq: "sections/Hero/hero_small.jpg" }) {
      id
      childImageSharp {
        fluid(jpegQuality: 100, maxWidth: 425) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
