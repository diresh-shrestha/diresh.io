import PropTypes from "prop-types"
import React, { useState } from "react"
import styled from "styled-components"
import NavLink from "./navlink"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMountain } from "@fortawesome/free-solid-svg-icons"
import Hamburger from "./Navbar/Hamburger"
import Menu from "./Navbar/Menu"
import { ClickAwayListener } from "@material-ui/core"
import Time from "./Time"
import ThemeToggler from "./ThemeToggler"

const HeaderWrapper = styled.header`
  height: 80px;
  background-color: var(--bg);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-bottom: 1.45rem;
  z-index: 100;
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
  margin: auto;
  max-width: 1200px;
  padding: 0.7rem 1rem;
`

const LogoImg = styled(FontAwesomeIcon)`
  vertical-align: middle;
  color: var(--textNormal);
`

const Contain = styled.div`
  position: fixed;
  left: 40%;
  top: 30px;
  display: inline-flex;
`

const Header = () => {
  // States to display the hamburger menu for mobile and tablet devices
  const [open, setOpen] = useState(false)
  // For OutsideClickHandler
  const handleClickAway = () => {
    setOpen(false)
  }

  const [hover, setHover] = useState(false)

  // Scroll to top function
  const handleScroll = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <HeaderWrapper>
      <HeaderContent>
        <LinkToHome onClick={handleScroll} to="/">
          <LogoImg
            style={{ width: `40px`, height: `40px` }}
            icon={faMountain}
          />
        </LinkToHome>
        {/* <Contain>

          <ThemeToggler />
        </Contain> */}
        <NavLink />

        <ClickAwayListener onClickAway={handleClickAway}>
          <div>
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
