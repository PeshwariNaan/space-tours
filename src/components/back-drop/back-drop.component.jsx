import { BackDropContainer } from './back-drop.styles';

const BackDrop = (props) => {
  return props.open ? <BackDropContainer onClick={props.clicked}></BackDropContainer> : null;
};

export default BackDrop;
