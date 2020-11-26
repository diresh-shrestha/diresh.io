import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import MenuItems from "./Navbar/MenuItems"
import Time from "./Time"
import ThemeToggler from "./ThemeToggler"

const List = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 1rem;
  @media (max-width: 1040px) {
    margin-right: 0.5rem;
  }
  @media (max-width: 950px) {
    margin-right: 0.3rem;
  }
`

const ListWrapper = styled.ul`
  list-style: none;
  float: right;
  margin: 0.5rem auto;
`

const Links = styled(AnchorLink)`
  position: relative;
  font-size: 0.8rem;

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 1040px) {
    font-size: 0.7rem;
  }
`

const NavLink = () => {
  return (
    <ListWrapper>
      <ThemeToggler />

      {MenuItems.map(item => {
        return (
          <List>
            <Links to={item.url}>{item.title}</Links>
          </List>
        )
      })}
    </ListWrapper>
  )
}

export default NavLink
