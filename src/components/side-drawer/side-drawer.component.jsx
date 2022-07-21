import BackDrop from '../back-drop/back-drop.component';
import NavItems from '../navigation/nav-items/nav-items.component';
import { SideDrawerContainer, NavDrawerContainer } from './side-drawer.styles';

const SideDrawer = (props) => {
  return (
    <>
      <BackDrop open={props.open} clicked={props.open} />
      <SideDrawerContainer open={props.open}>
        <NavDrawerContainer>
          <NavItems />
        </NavDrawerContainer>
      </SideDrawerContainer>
    </>
  );
};

export default SideDrawer;
