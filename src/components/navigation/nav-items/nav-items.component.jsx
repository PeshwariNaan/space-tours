import React from 'react'
import NavItem from '../nav-item/nav-item.component'
import { NavList, TitleNumbers } from './nav-items.styles'

const NavItems = (props) => {
  return (
    <NavList >
        <NavItem clicked={props.clicked} link='/'><TitleNumbers>00</TitleNumbers>HOME</NavItem>
        <NavItem clicked={props.clicked} link='/destinations'><TitleNumbers>01</TitleNumbers>DESTINATIONS</NavItem>
        <NavItem clicked={props.clicked} link='/crew'><TitleNumbers>02</TitleNumbers>CREW</NavItem>
        <NavItem clicked={props.clicked} link='/technology'><TitleNumbers>03</TitleNumbers>TECHNOLOGY</NavItem>
    </NavList>
  )
}

export default NavItems