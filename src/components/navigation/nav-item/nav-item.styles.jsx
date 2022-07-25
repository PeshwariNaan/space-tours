import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: flex;
  flex-direction: row;
  font-family: 'Barlow Condensed';
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;
  margin: 4.5rem 0 0 0;

  :hover {
    border-bottom: 2px solid #808080;
  }
  
  &.active,
  :focus
    {
    border-bottom: 2px solid #ffffff;
  }
  :first-child {
    margin-left: 10%;
  }
  :last-child {
    margin-right: 5rem;
  }


  @media (max-width: 1200px) {
    :first-child {
      margin-left: 1rem;
    }
    :last-child {
      margin-right: 1rem;
    }
    font-size: 1.4rem;
  }

  @media (max-width: 500px) {
    :first-child,
    :last-child {
      margin-left: 0;
      margin-right: 0;
    }
    margin-top: 5rem;
    font-size: 1.6rem;

    :hover,
    &.active {
      border-bottom: none;
    }
  }
`;
