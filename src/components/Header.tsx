import { ClickAwayListener } from "@material-ui/core"
import { window } from "browser-monads"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import Mountain from "./icons/Mountain"
import Hamburger from "./Navbar/Hamburger"
import Menu from "./Navbar/Menu"
import NavLink from "./navlink"

const HeaderWrapper = styled.header`
  height: 60px;
  background-color: var(--bg);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom: 1.45rem;
  z-index: 50;
  box-shadow: 0px 2px 4px 0px #e1e1e1;
  // &:hover {
  //   height: 80px;
  // }
  // transition: height 0.5s ease-in-out;
`

const LinkToHome = styled(Link)`
  text-decoration: none;
  text-shadow: none;
  background-image: none;
`

const HeaderContent = styled.div`
  margin: -10px auto;
  max-width: 1200px;
  padding: 0.7rem 1rem;
  display: flex;
  justify-content: space-between;
`

const Header = () => {
  // States to display the hamburger menu for mobile and tablet devices
  const [open, setOpen] = useState(false)
  // For OutsideClickHandler
  const handleClickAway = () => {
    setOpen(false)
  }

  // const targetElement =
  //   typeof window !== `undefined` ? document.querySelector("#lock") : null

  // const targetElement = document.querySelector("#lock")

  // if (open) {
  //   disableBodyScroll(document.querySelector("#lock"))
  // } else {
  //   enableBodyScroll(document.querySelector("#lock"))
  // }

  // Scroll to top function
  const handleScroll = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LinkToHome onClick={handleScroll} to="/">
          <Mountain />
        </LinkToHome>

        <NavLink />

        <ClickAwayListener onClickAway={handleClickAway}>
          <div data-scroll-lock-scrollable>
            <Hamburger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </ClickAwayListener>
      </HeaderContent>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
