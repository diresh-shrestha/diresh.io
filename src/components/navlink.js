import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import MenuItems from "./Navbar/MenuItems"
import Time from "./Time"
import ThemeToggler from "./ThemeToggler"

const List = styled.li`
  position: relative;
  display: inline-block;
  margin-right: 0.5rem;
  // @media (max-width: 1040px) {
  //   margin-right: 0.5rem;
  // }
  // @media (max-width: 950px) {
  //   margin-right: 0.3rem;
  // }
`

const ListWrapper = styled.ul`
  list-style: none;
  float: right;
  margin: 0.5rem auto;
`

const Links = styled(AnchorLink)`
  position: relative;
  padding: 0.2rem;
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--textNormal);
  text-shadow: none;
  background-image: none;

  /* hover.css */
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;

  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--textLink);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transform-origin: 0 50%;
    transform-origin: 0 50%;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }

  &:hover,
  &:focus,
  &:active {
    color: white;
  }
  &:hover:before,
  &:focus:before,
  &:active:before {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
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
