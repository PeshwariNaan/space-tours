import styled from 'styled-components';

export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446707/space_tours/Technology/background-technology-desktop_nk5tsu.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;

  @media (max-width: 1200px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446707/space_tours/Technology/background-technology-tablet_ldach7.jpg)
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
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 58vh [row3-end row4-start] 10vh [row4-end];

  @media (max-width: 1200px) {
    grid-template-columns: minmax(50rem, 120rem);
    grid-template-rows: [row1-start] 15vh [row1-end row2-start] 8vh [row2-end row3-start] 30vh [row3-end row4-start] 40vh [row4-end row5-start] 7vh [row5-end];
  }
`;

export const TechInfoContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    grid-template-columns: auto;
    grid-template-rows: [row1-start] 20% [row1-end row2-start] 80% [row2-end] ;
    width: 90vw;
    justify-self: center;
  }
`;

export const TextContainer = styled.div`
  grid-column: 3 / 6;

    @media (max-width: 1200px) {
        grid-column: 1 / -1;
        grid-row: 2 / 3;
    }
`;

export const ButtonContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 5rem 0 0 0;

    @media (max-width: 1200px) {
        grid-column: 1 / -1;
        grid-row-start: 1;
        grid-row-end: 2;
        flex-direction: row;
    }
`;

export const TechButton = styled.button`
  height: 8rem;
  width: 8rem;
  color: #ffffff;
  border-radius: 50%;
  background-color: transparent;
  border-color: #ffffff;
  margin: 0 0 10% 0;
  :hover {
    background-color: #ffffff;
    color: black;
  }
`;
export const TechImageContainer = styled.div`
  grid-column: 2 / 3;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: end;

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row-start: 3;
    grid-row-end: 4;
  }
`;

export const TechImage = styled.img`
  width: fit-content;
  height: 100%;
`;

export const PageTitleNumberContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 2;
  grid-row-end: 3;

  @media (max-width: 1200px) {
    grid-column: 1 / -1;
    grid-row-start: 2;
    grid-row-end: 3;
    justify-content: start;
    align-self: start;
  }

  @media (max-width: 600px) {
    align-self: start;
  }
`;
