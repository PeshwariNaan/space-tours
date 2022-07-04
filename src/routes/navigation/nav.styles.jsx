import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.div`
  display: grid;
  position: fixed;
  width: 100%;
  margin-top: 5rem;
  height: 10rem;
  background-color: transparent;
  z-index: 900;
  grid-template-columns: repeat(16 1fr);
`;

export const LogoContainer = styled.div`
  grid-column: 1;
  align-self: center;
  margin-left: 3rem;
`;

export const CenterContainer = styled.div`
  display: grid;
  grid-column-start: 3;
  grid-column-end: 8;
  grid-template-columns: repeat(2, 1fr);
`;

export const LinkContainer = styled.div`
  grid-column-start: 9;
  grid-column-end: 15;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-self: center;
  
`;

export const NavLink = styled(Link)`
  margin: 0 2rem;
  font-family: 'Bellefair';
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;

export const TestLink = styled.h2`
  font-family: 'Bellefair';
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
`;

export const CustomHr = styled.hr`
  grid-column-start: 1;
  grid-column-end: 3;
  border: 1px solid #ffffff;
  align-self: center;
`;
