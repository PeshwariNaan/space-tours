import styled, { keyframes, css } from 'styled-components';

const extendNav = keyframes` 
     from {
      transform: translateX(300%);
     
    }
    to {
      transform: translateX(0%);
      
    }  
  `;

const retractNav = keyframes` 
from {
 transform: translateX(0%);

}
to {
 transform: translateX(300%);
 
}  
`;

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
  animation: ${props => props.open ?
  css`
  ${extendNav} 0.5s ease-out`: 
  css`
  ${retractNav} 0.5s ease-in`};

  @media (min-width: 500px) {
    display: none;
  }
`;

export const CloseLogoContainer = styled.div`
  @media (min-width: 501px) {
    display: none;
  }
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
    background-size: 4rem 5rem;
    padding: 4.5rem 0 0 4rem;
  }
`;

export const NavDrawerContainer = styled.div`
    grid-row: 2 / 3;
`
