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
  TitleNumbers,
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
          <NavLink to={'/'}><TitleNumbers>00</TitleNumbers>HOME</NavLink>
          <NavLink to={'/destinations'}><TitleNumbers>01</TitleNumbers>DESTINATIONS</NavLink>
          <NavLink to={'/crew'}><TitleNumbers>02</TitleNumbers>CREW</NavLink>
          <NavLink to={'/technology'}><TitleNumbers>03</TitleNumbers>TECHNOLOGY</NavLink>
        </LinkContainer>
      </NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
