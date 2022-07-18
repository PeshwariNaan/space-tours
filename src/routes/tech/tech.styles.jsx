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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 56vh [row3-end row4-start] 12vh;
`;

export const TechInfoContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const TextContainer = styled.div`
  grid-column: 3 / 6;
`;

export const ButtonContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  margin: 5rem 0 0 0;
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
  align-self: center;
  justify-self: center;
`;
