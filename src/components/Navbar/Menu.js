import { Link } from "gatsby"
import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import MenuItems from "./MenuItems"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--bg);
  height: 100vh;
  text-align: right;
  padding: 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.5s ease-in-out;
  @media (max-width: 700px) {
    width: 100%;
  }
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
`

const StyledLink = styled(AnchorLink)`
  font-size: 1.5rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: var(--textNormal);
  transition: color 0.5s linear;

  @media (max-width: 700px) {
    font-size: 1.5rem;
    text-align: center;
  }

  &:hover {
    color: red;
  }
`

export default function Menu({ open, setOpen }) {
  return (
    <StyledMenu open={open} onClick={() => setOpen(!open)}>
      {MenuItems.map(item => {
        return <StyledLink to={item.url}>{item.title}</StyledLink>
      })}
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: PropTypes.bool.isRequired,
}
