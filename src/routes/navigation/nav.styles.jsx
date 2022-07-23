import styled from 'styled-components';

export const NavContainer = styled.div`
  position: fixed;
  margin-top: 5vh;
  z-index: 100;
  width: 100%;
  display: grid;
  grid-auto-rows: 10.5rem;
  grid-template-columns: repeat(20, 1fr);
  background-color: transparent;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(10, 1fr);
    margin-top: 0;
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(4, auto);
   }
`;

export const LogoContainer = styled.div`
  display: grid;
  grid-column: 1 / 3;
  grid-row: 1;
  height: 100%;
  width: 100px;
  align-content: center;
  justify-content: center;
  background-size: 2rem 3rem;
  margin: 0 0 0 4rem;

  @media (max-width: 1200px) {
    grid-column: 1 / 2;
    margin: 0 0 0 0;
  }

  @media (max-width: 500px) {
    grid-column: 1 / 2;
  }
`;

export const HamburgerContainer = styled.div`
  display: grid;
  @media (min-width: 501px) {
    display: none;
  }
  @media (max-width: 500px) {
    grid-column: 4 / 5;
    grid-row: 1;
    width: 100%;
    height: 100%;
    background-size: 4rem 5rem;
    justify-content: center;
    align-content: center;
  }
`;

export const HLineContainer = styled.div`
  grid-column: 3 / 10;
  grid-row: 1;
  height: 100%;
  width: auto;
  padding: 0 3rem 0 0;
  align-content: center;
  z-index: 500;

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LinkContainer = styled.div`
  grid-column: 9 / 21;
  grid-row: 1;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  margin: 0 0 0 0;

  @media (max-width: 1200px) {
    grid-column: 4 / 11;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export const CustomHr = styled.hr`
  margin-top: 5.25rem;

  width: 100%;
  border: 1px solid;
  color: rgba(255, 255, 255, 0.35);
  z-index: 600;
`;
