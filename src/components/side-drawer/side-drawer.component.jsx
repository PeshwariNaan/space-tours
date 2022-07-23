import BackDrop from '../back-drop/back-drop.component';
import NavItems from '../navigation/nav-items/nav-items.component';
import { ReactComponent as CloseIcon } from '../../assets/icon-close.svg'
import { SideDrawerContainer, NavDrawerContainer, CloseLogoContainer } from './side-drawer.styles';

const SideDrawer = (props) => {
  return (
    <>
      <BackDrop show={props.open} clicked={props.closed} />
      <SideDrawerContainer  open={props.open} closed={props.closed}>
        <CloseLogoContainer>
          <CloseIcon onClick={props.closed}/>
        </CloseLogoContainer>
        <NavDrawerContainer>
          <NavItems clicked={props.closed} />
        </NavDrawerContainer>
      </SideDrawerContainer>
    </>
  );
};

export default SideDrawer;
