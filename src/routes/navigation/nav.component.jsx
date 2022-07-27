import { useState } from 'react';
import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavItems from '../../components/navigation/nav-items/nav-items.component';
import SideDrawer from '../../components/side-drawer/side-drawer.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { ReactComponent as Burger } from '../../assets/icon-hamburger.svg';
import {
  HLineContainer,
  CustomHr,
  LinkContainer,
  LogoContainer,
  NavContainer,
  HamburgerContainer,
} from './nav.styles';

const Navbar = () => {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const ShowDrawerHandler = () => {
    setSideDrawerIsVisible(true);
  };

  const CloseDrawerHandler = () => {
    setSideDrawerIsVisible(false);
  };

  return (
    <Fragment>
      <NavContainer>
        <LogoContainer >
          <Logo/>
        </LogoContainer>
        <HLineContainer>
          <CustomHr />
        </HLineContainer>
        <HamburgerContainer>
          <Burger onClick={ShowDrawerHandler} />
        </HamburgerContainer>
        <LinkContainer>
          <NavItems />
        </LinkContainer>
      </NavContainer>
      <SideDrawer open={sideDrawerIsVisible} closed={CloseDrawerHandler} />
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
