import BackDrop from '../back-drop/back-drop.component';
import NavItems from '../navigation/nav-items/nav-items.component';
import { SideDrawerContainer, NavDrawerContainer } from './side-drawer.styles';

const SideDrawer = (props) => {
  return (
    <>
      <BackDrop show={props.open} clicked={props.closed} />
      <SideDrawerContainer onClick={props.closed} open={props.open}>
        <NavDrawerContainer>
          <NavItems />
        </NavDrawerContainer>
      </SideDrawerContainer>
    </>
  );
};

export default SideDrawer;
