import styled from 'styled-components';


export const NavContainer = styled.div`
  position: fixed;
  margin-top: 8vh;
  z-index: 200;
  width: 100%;
  height: 10.5rem;
  display: grid;
  grid-template-columns: minmax(10rem, 15rem) auto auto;
  grid-template-areas: 'logo image nav';
  background-color: transparent;

   @media (max-width: 1200px) {
    grid-template-columns: minmax(10rem, 15rem) auto  auto;
    grid-template-areas: 'logo nav nav';
    margin-top: 0;
   }

   @media (max-width: 500px) {
    grid-template-columns: minmax(10rem, 15rem) auto minmax(5rem, 10rem);
    grid-template-areas: 'logo . burger';
    margin-top: 0;
   }
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  height: 100%;
  width: 100px;
  padding-top: 2.5rem;
  background-size: 2rem 3rem;
  justify-self: end;

   @media(max-width: 1200px) {
    padding-left: 1rem;
   }
`;



export const HamburgerContainer = styled.div`
    @media (min-width: 501px){
      display: none;
    }
  @media (max-width: 500px) {    
    grid-area: burger;
    width: 100%;
    height: 100%;
    background-size: 4rem 5rem;
    padding: 4.5rem 0 0 4rem;
  }


`

export const HLineContainer = styled.div`
  grid-area: image;
  height: 100%;
  width: auto;
  padding-left: 3rem;
  align-content: center;

   @media(max-width: 1200px) {
      display: none;
   }
`;


export const LinkContainer = styled.div`
  grid-area: nav;  
  width: auto;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  

    @media (max-width: 1200px) {
      justify-self: end;
      width: 70vw;
    }

    @media (max-width: 500px) {
      display: none;
    }
  
  
`;

export const CustomHr = styled.hr`
  margin-top: 5.25rem;
  width: 100%;
  border: 2px solid;
  color: rgba(255, 255, 255, 0.25);
`;


