import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Burger } from '../../assets/icon-hamburger.svg'
import {
  HLineContainer,
  CustomHr,
  LinkContainer,
  LogoContainer,
  NavContainer,
  Link,
  TitleNumbers,
  HamburgerContainer,
  
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
        <HamburgerContainer>
          <Burger />
        </HamburgerContainer>
        <LinkContainer>
          <Link to={'/'}><TitleNumbers>00</TitleNumbers>HOME</Link>
          <Link to={'/destinations'}><TitleNumbers>01</TitleNumbers>DESTINATIONS</Link>
          <Link to={'/crew'}><TitleNumbers>02</TitleNumbers>CREW</Link>
          <Link to={'/technology'}><TitleNumbers>03</TitleNumbers>TECHNOLOGY</Link>
        </LinkContainer>
      </NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
