import React, { useState } from "react"
import styled from "styled-components"
import { MenuItems } from "./MenuItems"
import { Link } from "gatsby"

const NavbarItems = styled.nav`
  background: #f6f6f6;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
`
const List = styled.li`
  display: inline-block;
  margin-right: 1rem;
`

const LogoImg = styled.h1`
  color: black;
  justify-self: start;
  margin-left: 20px;
  cursor: pointer;
`

const ListWrapper = styled.ul`
  list-style: none;
  float: right;
`

const Links = styled(AnchorLink)`
  color: black;
  text-decoration: none;
  text-shadow: none;
  background-image: none;
`

export default function Navbar() {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked({ clicked: !clicked })
  }
  return (
    <NavbarItems>
      <LogoImg></LogoImg>

      <ListWrapper>
        {MenuItems.map(item => {
          return (
            <List>
              <Links to={item.url}>{item.title}</Links>
            </List>
          )
        })}
      </ListWrapper>
    </NavbarItems>
  )
}
