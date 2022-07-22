import styled from 'styled-components';


export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446587/space_tours/Destinations/background-destination-desktop_dzcews.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;
  margin: 0;

  @media (max-width: 768px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446586/space_tours/Destinations/background-destination-tablet_urunme.jpg)
      no-repeat;
      background-size: cover;
      height: 100vh;
  }

  @media (max-width: 375px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446587/space_tours/Destinations/background-destination-mobile_orkqrd.jpg)
      no-repeat;
      background-size: cover;
      height: 100vh;
  }
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50rem, 80rem));
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 5vh [row3-end row4-start] 60vh [row4-end];

  @media (max-width: 1070px) {
    grid-template-columns: minmax(50rem, 120rem);
    grid-template-rows: [row1-start] 10vh [row1-end row2-start] 8vh [row2-end row3-start] 40vh [row3-end row4-start] 5vh [row4-end row5-start] 42vh [row5-end];
    
  }
  @media (max-width: 500px) {
    grid-template-columns: minmax(30rem, 50rem);
    grid-template-rows: [row1-start] 10vh [row1-end row2-start] 8vh [row2-end row3-start] 40vh [row3-end row4-start] 5vh [row4-end row5-start] 42vh [row5-end];
    
  }
`;

export const PlanetImageContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 5;
  padding: 0 0 8rem 32%;

  @media (max-width: 1200px) {
    padding: 0 0 8rem 15%;
  }

  @media (max-width: 1070px) {
    grid-column: 1 / -1;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 0 0 0 0;
    place-self: center;
    
  }
`;

export const PlanetImage = styled.img`
  width: 45rem;
  height: 45rem;
  
    @media (max-width: 1070px) {
      width: 30rem;
      height: 30rem;
      place-self: center;
    }
`

export const MenuContainer = styled.div`
  grid-column: 2 / 3;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  flex-direction: row;
  justify-self: center;
  justify-content: center;
  margin: 1rem 10rem 0 0;

  @media (max-width: 1070px) {
    grid-column: 1 / -1; 
    grid-row-start: 4;
    grid-row-end: 5;    
    margin: 0 0 0 0;
    justify-content: center;
  }
`;

export const PlanetSelect = styled.h3`
  font-family: 'Barlow Condensed';
  font-weight: 300;
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  text-transform: uppercase;
  color: #ffffff;
  border-bottom: ${props => props.isSelected? '2px solid #ffffff' : 'none'};
  cursor: pointer;
  margin: 0 4rem 0 0;
  :last-child {
    margin-right: 0;
  }
  &:hover {
    border-bottom: ${props => props.isSelected ? '2px solid #ffffff': '2px solid #444444'};
  }
    @media (max-width: 1070px) {
      
    }
`;

export const PlanetInfoContainer = styled.div`
  grid-column: 2 / 3;
  grid-row-start: 4;
  grid-row-end: 5;
  justify-self: center;
  justify-content: center;
  margin: 0 0 0 2rem;

  @media (max-width: 1070px) {
    grid-column: 1 / -1;
    grid-row-start: 5;
    grid-row-end: 6;
    margin: 0 5% 0 5%;
  }
`;

export const PageTitleNumberContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: 1080px) {
    grid-column: 1 / -1;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-content: flex-start;
    
  }
  @media (max-width: 500px) {    
    justify-content: center;    
  }
`;
