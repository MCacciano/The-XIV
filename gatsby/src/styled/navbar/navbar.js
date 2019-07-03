import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNavbar = styled.nav`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-template-areas: "brand nav";
`

const NavbarBrand = styled.h3`
  grid-area: brand;
`

const Nav = styled.ul`
  grid-area: nav;
  display: flex;
  justify-content: flex-end;
  list-style: none;
`

const NavItem = styled.li``

const NavLink = styled.a``

const renderLinks = (links = []) => {
  return links.map(link => (
    <NavItem>
      <NavLink>{link}</NavLink>
    </NavItem>
  ))
}

const MainNav = props => {
  return (
    <StyledNavbar>
      <NavbarBrand>{props.brand}</NavbarBrand>
      <Nav>{renderLinks(props.links)}</Nav>
    </StyledNavbar>
  )
}

export default MainNav
