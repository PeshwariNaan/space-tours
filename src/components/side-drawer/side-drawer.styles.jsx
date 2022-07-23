import styled from 'styled-components';

export const SideDrawerContainer = styled.div`
  position: fixed;
  display: grid;
  grid-template-rows: [row1-start] 10vh [row1-end row2-start] 90vh [row2-end];
  width: 65vw;
  height: 100%;
  right: 0;
  top: 0;
  z-index: 300;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(25px);
  box-sizing: border-box;
  transition: transform 0.5s ease-out;
  transform: translateX(${(props) => (props.open ? '0' : '100%')});

  @media (min-width: 500px) {
    display: none;
  }
`;



export const CloseLogoContainer = styled.div`
  display: grid;
  @media (min-width: 501px) {
    display: none;
  }
  @media (max-width: 500px) {
    grid-row: 1 / 2;
    grid-column: 1;
    width: 100%;
    height: 100%;
    background-size: 4rem 4rem;
    align-content: center;
    justify-content: center;
    margin: 0 0 0 35%;    
  }
`;

export const NavDrawerContainer = styled.div`
  grid-row: 2 / 3;
`;
