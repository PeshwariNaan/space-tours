import React from 'react';
import { Link } from './nav-item.styles';

const NavItem = (props) => {
  return (
    <>
      <Link to={props.link} onClick={props.clicked}>{props.children}</Link>
    </>
  );
};

export default NavItem;
