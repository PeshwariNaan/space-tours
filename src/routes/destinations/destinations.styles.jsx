import styled from 'styled-components';

export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446587/space_tours/Destinations/background-destination-desktop_dzcews.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;
  margin: 0;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 8vh [row3-end row4-start] 60vh;
`;

export const PlanetImageContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 5;
  place-self: center;
  padding-bottom: 8rem;
  padding-left: 15rem;
`;

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-column: 1 / 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-items: center;
  align-items: center;
  margin: 0;
  padding-left: 25%;
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

export const MenuContainer = styled.div`
  grid-column: 2 / 3;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: row;
  margin: 2.5rem 0 0 0;  
`;

export const PlanetSelect = styled.h3`
  font-family: 'Barlow Condensed';
  font-weight: 300;
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
  margin: 0 4rem 0 0;

  :hover {
    border-bottom: 2px solid #444444;
  }
  :active {
    border-bottom: 2px solid #ffffff;
  }
  
 
`;

export const PlanetInfoContainer = styled.div`
  grid-column: 2 /3;
  grid-row-start: 4;
  grid-row-end: 5;
  justify-content: center;

`
