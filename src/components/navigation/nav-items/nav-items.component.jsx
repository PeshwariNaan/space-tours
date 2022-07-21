import React from 'react'
import NavItem from '../nav-item/nav-item.component'
import { NavList, TitleNumbers } from './nav-items.styles'

const NavItems = () => {
  return (
    <NavList>
        <NavItem link='/'><TitleNumbers>00</TitleNumbers>HOME</NavItem>
        <NavItem link='/destinations'><TitleNumbers>01</TitleNumbers>DESTINATIONS</NavItem>
        <NavItem link='/crew'><TitleNumbers>02</TitleNumbers>CREW</NavItem>
        <NavItem link='/technology'><TitleNumbers>03</TitleNumbers>TECHNOLOGY</NavItem>
    </NavList>
  )
}

export default NavItems