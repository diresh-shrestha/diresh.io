import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavWrapper = styled.ul`
  position: fixed;
`

const NavList = styled(Link)`
  color: black;
  text-align: center;
  height: 2.5em;
  width: 4em;
  vertical-align: middle;
  line-height: 2.5em;
  border-bottom: 1px solid #060606;
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: all 0.25s linear;

  &:hover {
    background: #ff6e42;
    color: #fffcfb;
    transform: translate(0.9em, -0.9em);
    transition: all 0.25s linear;
    box-shadow: -2em 2em 0 #e1e1e1;

    &:before,
    &:after {
      transition: all 0.25s linear;
    }

    &:before {
      background: #b65234;
      width: 1em;
      top: 0.5em;
      left: -1em;
    }

    &:after {
      background: #b65234;
      width: 1em;
      bottom: -2.5em;
      left: 1em;
      height: 4em;
    }
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: all 0.25s linear;
    width: 0.5em;
  }

  &:after {
    height: 4em;
    background: #181818;
    bottom: -2.25em;
    left: 1.5em;
    transform: rotate(90deg) skew(0, 45deg);
  }

  &:before {
    height: 2.5em;
    background: #121212;
    top: 0.25em;
    left: -0.5em;
    transform: skewY(-45deg);
  }
`

export default function Navbar() {
  return (
    <NavWrapper>
      <NavList to="/about">About</NavList>
      <NavList to="/contact">Contact</NavList>
      <NavList to="/blog">Blog</NavList>
    </NavWrapper>
  )
}
