import React from 'react';
import NavItem from '../nav-item/nav-item.component';
import { NavList, TitleNumbers } from './nav-items.styles';

const activeLink = { borderColor: '#ffffff', color: '#ffffff' };
const NavItems = (props) => {
  return (
    <NavList>
      <NavItem
        style={({ isActive }) => (isActive ? activeLink : undefined)}
        clicked={props.clicked}
        link="/space-tours"
        exact='true'
      >
        <TitleNumbers>00</TitleNumbers>HOME
      </NavItem>
      <NavItem
        style={({ isActive }) => (isActive ? activeLink : undefined)}
        clicked={props.clicked}
        link="/space-tours/destinations"
        exact='true'
      >
        <TitleNumbers>01</TitleNumbers>DESTINATIONS
      </NavItem>
      <NavItem
        style={({ isActive }) => (isActive ? activeLink : undefined)}
        clicked={props.clicked}
        link="/space-tours/crew"
        exact='true'
      >
        <TitleNumbers>02</TitleNumbers>CREW
      </NavItem>
      <NavItem
        style={({ isActive }) => (isActive ? activeLink : undefined)}
        clicked={props.clicked}
        link="/space-tours/technology"
        exact='true'
      >
        <TitleNumbers>03</TitleNumbers>TECHNOLOGY
      </NavItem>
    </NavList>
  );
};

export default NavItems;
