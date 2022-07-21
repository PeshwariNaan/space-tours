import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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

  @media (max-width: 1200px) {
    :first-child {
      margin-left: 1rem;
    }
    :last-child {
      margin-right: 1rem;
    }
    font-size: 1.4rem;
  }
`;

export const ListItem = styled.li`

`;


