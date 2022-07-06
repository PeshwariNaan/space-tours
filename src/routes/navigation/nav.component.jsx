import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
  HLineContainer,
  CustomHr,
  LinkContainer,
  LogoContainer,
  NavContainer,
  NavLink,
} from './nav.styles';

const Navbar = () => {
  return (
    <Fragment>
      <NavContainer>
        <LogoContainer to={'/'}>
          <Logo />
        </LogoContainer>
        <HLineContainer>
          <CustomHr />
        </HLineContainer>
        <LinkContainer>
          <NavLink to={'/'}>00 HOME</NavLink>
          <NavLink to={'/destinations'}>01 DESTINATIONS</NavLink>
          <NavLink to={'/crew'}>02 CREW</NavLink>
          <NavLink to={'/technology'}>03 TECHNOLOGY</NavLink>
        </LinkContainer>
      </NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
