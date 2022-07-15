import styled from "styled-components";

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-column-start: ${props => props.columnStart};
  grid-column-end: ${props => props.columnEnd};
  grid-row-start: ${props => props.rowStart};
  grid-row-end: ${props => props.rowEnd};
  justify-items: center;
  align-items: center;
  padding: 5rem 0 0 25%;

    @media (max-width: 1200px) {
      padding: 5rem 0 0 3%;
    }
`;

export const PageTitleText = styled.h5`
  font-family: 'Barlow Condensed';
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 0.475rem;
  margin: 0;
`;

export const PageNumber = styled.h1`
  font-family: 'Barlow Condensed';
  font-size: 2.8rem;
  font-weight: 600;
  color: #333333;
  margin: 0 2rem;
`;