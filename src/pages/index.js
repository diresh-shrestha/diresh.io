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

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Hero image={data.hero.childImageSharp.fluid} />
    <About content={data.about.edges} />
    <Experience content={data.experience.edges} />
    <Projects />
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
    hero: file(relativePath: { regex: "/sections/Hero/" }) {
      childImageSharp {
        fluid(jpegQuality: 100, maxWidth: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
