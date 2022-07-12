import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  position: fixed;
  margin-top: 10rem;
  z-index: 900;
  width: 100%;
  height: 10.5rem;
  display: grid;
  grid-template-columns: minmax(15rem, 20rem) 1fr min-content;
  grid-template-areas: 'logo image nav';
  background-color: transparent;
`;

export const LogoContainer = styled.div`
  grid-area: logo;
  height: 100%;
  width: 100px;
  padding-top: 2.5rem;
  padding-left: 5rem;
  background-size: 20px 30px;
  justify-self: end;
`;

export const HLineContainer = styled.div`
  grid-area: image;
  height: 100%;
  width: 100%;
  padding-left: 3rem;
  align-content: center;
`;

export const LinkContainer = styled.div`
  grid-area: nav;
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(20rem, 35rem));
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
  margin-right: 5rem;
 
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: row;
  font-family: 'Barlow Condensed';
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  justify-self: center;
  margin: 0 2rem;

  :hover {
    border-bottom: 2px solid #444444;
  }
  :active {
    border-bottom: 2px solid #ffffff;
  }
`;

export const CustomHr = styled.hr`
  margin-top: 5rem;
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
`;
