import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import MenuItems from "./Navbar/MenuItems"
import ThemeToggler from "./ThemeToggler"
import { Link } from "gatsby"

const List = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 4.5rem;
  @media (max-width: 1200px) {
    margin-right: 4rem;
  }
  @media (max-width: 1080px) {
    margin-right: 3rem;
  }
  @media (max-width: 940px) {
    margin-right: 2.5rem;
  }

  @media (max-width: 880px) {
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
  // @media (max-width: 950px) {
  //   margin-right: 0.3rem;
  // }
`

const ListWrapper = styled.ul`
  list-style: none;
  font-weight: bold;
  float: right;
  margin: 0.5rem 3rem;

  @media (max-width: 1200px) {
    margin: 0.55rem 2rem;
  }

  @media (max-width: 425px) {
    margin: 0.8rem 0rem;
  }
`

const Links = styled(AnchorLink)`
  position: relative;
  padding: 0.2rem;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--textNormal);
  text-shadow: none;
  background-image: none;

  @media (max-width: 768px) {
    display: none;
  }
`

const PageLinks = styled(Link)`
  position: relative;
  padding: 0.2rem;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--textNormal);
  text-shadow: none;
  background-image: none;
  margin-right: 4.5rem;
  @media (max-width: 1200px) {
    margin-right: 4rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1080px) {
    margin-right: 3rem;
  }
  @media (max-width: 940px) {
    margin-right: 2.5rem;
  }

  @media (max-width: 880px) {
    margin-right: 1.5rem;
  }

  @media (max-width: 768px) {
    margin-right: 0;
  }
  // @media (max-width: 768px) {
  //   display: none;
  // }
  // @media (max-width: 1040px) {
  //   font-size: 0.7rem;
  // }
`

const VerticalRule = styled.div`
  display: inline-flex;
  margin: auto 1rem;
  margin-bottom: -0.2rem;
  width: 2px;
  height: 20px;
  background-color: var(--textNormal);
  @media (max-width: 768px) {
    display: none;
  }
`
const NavLink = () => {
  return (
    <ListWrapper>
      {MenuItems.map(item => {
        return (
          <List>
            <Links className="hvr-sweep-to-right" to={item.url}>
              {item.title}
            </Links>
          </List>
        )
      })}
      {/* <VerticalRule /> */}

      <PageLinks className="hvr-sweep-to-right" to="/contact">
        CONTACT
      </PageLinks>
      <PageLinks className="hvr-sweep-to-right" to="/blog">
        BLOG
      </PageLinks>
      <ThemeToggler />
    </ListWrapper>
  )
}

export default NavLink
