import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import React from "react"
import styled from "styled-components"
import MenuItems from "./Navbar/MenuItems"

const List = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
  

  @media (max-width: 768px) {
    margin-right: 0;
 
`

const ListWrapper = styled.ul`
  list-style: none;
  font-weight: bold;
  float: right;
  margin: 0.5rem 2rem;

  @media (max-width: 1200px) {
    margin: 0.55rem 1rem;
  }

  @media (max-width: 786px) {
    margin: 0.55rem 0.5rem;
  }

  @media (max-width: 425px) {
    margin: 0.8rem 0rem;
  }
`

const Links = styled(AnchorLink)`
  position: relative;
  padding: 0.2rem;
  font-size: 1rem;
  text-decoration: none;
  color: var(--textNormal);
  text-shadow: none;
  background-image: none;

  @media (max-width: 1040px) {
    font-size: 0.9rem;
  }
  @media (max-width: 890px) {
    font-size: 0.8rem;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const PageLinks = styled(Link)`
  position: relative;
  padding: 0.2rem;
  font-size: 1rem;
  text-decoration: none;
  color: var(--textNormal);
  text-shadow: none;
  background-image: none;
  margin-right: 1rem;

  @media (max-width: 768px) {
    display: none;
    margin-right: 0;
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
        Contact
      </PageLinks>
      <PageLinks className="hvr-sweep-to-right" to="/blog">
        Blog
      </PageLinks>
      {/* <ThemeToggler /> */}
    </ListWrapper>
  )
}

export default NavLink
