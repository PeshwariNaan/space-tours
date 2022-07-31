import React from 'react';
import { Link } from './nav-item.styles';

const NavItem = (props) => {
  return (
    <>
      <Link end to={props.link} onClick={props.clicked} style={props.style}>{props.children}</Link>
    </>
  );
};

export default NavItem;
