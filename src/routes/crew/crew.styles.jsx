import styled from 'styled-components';

export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446652/space_tours/Crew/background-crew-desktop_r5rlmr.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;

  @media (max-width: 1200px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446651/space_tours/Crew/background-crew-tablet_avjbpt.jpg)
      no-repeat;
    overflow: hidden;
    background-size: cover;
    height: 100vh;
    background-position: center center;
  }

  @media (max-width: 500px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446652/space_tours/Crew/background-crew-mobile_uefint.jpg)
      no-repeat;
    overflow: hidden;
    background-size: cover;
    height: 100vh;
    background-position: center center;
  }
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50rem, 80rem));
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 56vh [row3-end row4-start] 12vh;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(50rem, 120rem);
    grid-template-rows: [row1-start] 10vh [row1-end row2-start] 8vh [row2-end row3-start] 30vh [row3-end row4-start] 5vh [row4-end row5-start] minmax(
        60rem,
        70rem
      ) [row5-end];
  }

  @media (max-width: 500px) {
    grid-template-columns: minmax(30rem, 50rem);
    grid-template-rows: [row1-start] 9rem [row1-end row2-start] 5rem [row2-end row3-start] 30rem [row3-end row4-start] 8rem [row4-end row5-start] 40rem [row5-end];
  }
`;

export const CrewInfoContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 3;
  grid-row-end: 4;
  margin: 0 0 0 0;

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row-start: 3;
    grid-row-end: 4;
    align-content: center;
    justify-content: center;
  }
  @media (max-width: 500px) {
    grid-column: 1 / -1;
    grid-row-start: 5;
    grid-row-end: 6;
    align-content: start;
  }
`;

export const CrewImageContianer = styled.div`
  grid-column: 2 / 3;
  grid-row-start: 3;
  grid-row-end: 5;
  justify-self: center;

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row-start: 5;
    grid-row-end: 6;
    padding: 0 0 0 0;
  }
  @media (max-width: 500px) {
    grid-column: 1 / -1;
    grid-row-start: 3;
    grid-row-end: 4;
    padding: 2rem 0 0 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    margin: 0 5%;
  }
`;

export const CrewImg = styled.img`
  max-width: 100%;
  height: 60rem;
  margin: 0 0 0 0;

  @media (max-width: 1079px) {
    width: 50rem;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  @media (max-width: 500px) {
    max-width: 35rem;
    max-height: 100%;
    
  }
`;

export const CrewMenuContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 4;
  grid-row-end: 5;
  display: flex;
  flex-direction: row;
  margin: 2rem 0 0 27%;

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row-start: 4;
    grid-row-end: 5;
    justify-content: center;
    margin: 1rem 0 0 0;
  }

  @media (max-width: 500px) {
    margin: 1rem 0 0 0;
    align-items: center;
  }
`;

export const SmallButton = styled.button`
  height: 1.5rem;
  width: 1.5rem;
  background-color: ${(props) => (props.isSelected ? '#ffffff' : '#808080')};
  cursor: pointer;
  border-radius: 50%;
  border-style: none;
  text-align: center;
  margin-right: 3rem;
  :last-child {
    margin-right: 0;
  }

  :hover {
    background-color: ${(props) => (props.isSelected ? '#ffffff' : '#a9a9a9')};
  }
  :active {
    background-color: #ffffff;
  }

  @media (max-width: 1200px) {
    height: 1rem;
    width: 1rem;
  }
`;
export const PageTitleNumberContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-content: flex-start;
  }

  @media (max-width: 600px) {
    align-self: flex-start;
  }
`;
