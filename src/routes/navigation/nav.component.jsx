import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
  CenterContainer,
  CustomHr,
  LinkContainer,
  LogoContainer,
  NavContainer,
  // NavLink,
  TestLink,
} from './nav.styles';

const Navbar = () => {
  return (
    <Fragment>
      <NavContainer>
        <LogoContainer>
          <Logo className="logo" />
        </LogoContainer>
        <CenterContainer>
          <CustomHr />
        </CenterContainer>
        <LinkContainer>
          <TestLink> HOME </TestLink>
          <TestLink> DESTINATIONS </TestLink>
          <TestLink> CREW </TestLink>
          <TestLink> TECHNOLOGY </TestLink>
        </LinkContainer>
      </NavContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
