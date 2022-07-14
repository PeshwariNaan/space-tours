import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.div`
  position: fixed;
  margin-top: 8vh;
  z-index: 900;
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
  display: flex;
  flex-direction: row;
  width: auto;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  justify-content: space-between;

    @media (max-width: 1200px) {
      justify-self: end;
      width: 70vw;
    }
  
  
`;

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  flex-shrink: 3;
  font-family: 'Barlow Condensed';
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  margin: 4.5rem 0 0 0;

  :first-child {
    margin-left: 10%;
  }
  :last-child {
    margin-right: 5rem;
  }

  :hover {
    border-bottom: 2px solid #444444;
  }
  &.active {
    border-bottom: 2px solid #ffffff;
  }

  @media(max-width: 1200px){
    :first-child {
    margin-left: 1rem;
  }
  :last-child {
    margin-right: 1rem;
  }
  font-size: 1.4rem;

  }
`;

export const CustomHr = styled.hr`
  margin-top: 5.25rem;
  width: 100%;
  border: 2px solid;
  color: rgba(255, 255, 255, 0.25);
`;

export const TitleNumbers = styled.h5`
  display: flex;
  flex-direction: row;
  font-family: 'Barlow Condensed';
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  margin: 0 1rem 0 0;

    @media(max-width: 1200px) {
      display: none;
      width: 0;
    }
    `;
