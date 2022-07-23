import styled from 'styled-components';

export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446707/space_tours/Technology/background-technology-desktop_nk5tsu.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;

  @media (max-width: 1079px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446707/space_tours/Technology/background-technology-tablet_ldach7.jpg)
      no-repeat;
    overflow: hidden;
    background-size: cover;
    height: 100vh;
    background-position: center center;
  }

  @media (max-width: 375px) {
    background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446707/space_tours/Technology/background-technology-mobile_j95bsp.jpg)
      no-repeat;
    overflow: hidden;
    background-size: cover;
    height: 100vh;
    background-position: center center;
  }
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(50rem, 100rem));
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 58vh [row3-end row4-start] 10vh [row4-end];

  @media (max-width: 1079px) {
    grid-template-columns: minmax(50rem, 120rem);
    grid-template-rows: [row1-start] 10vh [row1-end row2-start] 8vh [row2-end row3-start] 35vh [row3-end row4-start] 40vh [row4-end row5-start] 7vh [row5-end];
  }

  @media (max-width: 500px) {
    grid-template-columns: minmax(30rem, 50rem);
    grid-template-rows: [row1-start] 9rem [row1-end row2-start] 5rem [row2-end row3-start] 25rem [row3-end row4-start] 30rem [row4-end row5-start] 5rem [row5-end];
  }
`;

export const TechInfoContainer = styled.div`
  grid-column: 1 / 2;
  grid-row-start: 3;
  grid-row-end: 4;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1079px) {
    grid-column: 1 / -1;
    grid-row: 4 / 5;
    grid-template-columns: auto;
    grid-template-rows: [row1-start] 20% [row1-end row2-start] 80% [row2-end];
    width: 80vw;
    justify-self: center;
  }
  @media (max-width: 500px) {
    grid-template-rows: [row1-start] 15% [row1-end row2-start] 85% [row2-end];
    width: 90vw;
  }
`;

export const TextContainer = styled.div`
  display: grid;
  grid-column: 3 / 6;

  @media (max-width: 1079px) {
    grid-column: 1 / -1;
    grid-row: 2 / 3;
    align-content: start;
    margin: 3rem 0 0 0;
  }
`;

export const ButtonContainer = styled.div`
  grid-column: 2 / 3;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: center;
  margin: 10rem 0 0 0;

  @media (max-width: 1200px) {
    margin: 2.5rem 0 0 0;
  }

  @media (max-width: 1079px) {
    grid-column: 1 / -1;
    grid-row-start: 1;
    grid-row-end: 2;
    flex-direction: row;
    margin-top: 2rem;
    margin-right: 1rem;
    justify-content: center;

    :last-child {
      margin-right: 0;
    }

    @media (max-width: 500px) {
      margin: 2rem 0 2rem 0;
    }
  }
`;

export const TechButton = styled.button`
  height: 8rem;
  width: 8rem;
  color: ${(props) => (props.isSelected ? 'black' : '#ffffff')};
  border-radius: 50%;
  background-color: ${(props) =>
    props.isSelected ? '#ffffff' : 'transparent'};
  border-color: #ffffff;
  border-style: solid;
  margin: 0 0 30% 0;
  :hover {
    background-color: #ffffff;
    color: black;
  }

  @media (max-width: 1200px) {
  }

  @media (max-width: 1079px) {
    height: 6.5rem;
    width: 6.5rem;
    margin-bottom: 0;
    margin-right: 2rem;
    :last-child {
      margin-right: 0;
    }

    @media (max-width: 500px) {
      height: 4.5rem;
      width: 4.5rem;
    }
  }
`;
export const TechImageContainer = styled.div`
  grid-column: 2 / 3;
  grid-row-start: 3;
  grid-row-end: 4;
  justify-self: end;

  @media (max-width: 1079px) {
    grid-column: 1 / -1;
    grid-row-start: 3;
    grid-row-end: 4;
    justify-self: center;
  }
`;

export const TechImage = styled.img`
  max-width: 100%;
  height: 55rem;
  margin: 0 0 0 0;

  @media (max-width: 1079px) {
    max-width: 80rem;
    max-height: 100%;
    object-fit: contain;
  }
  @media (max-width: 500px) {  
    max-width: 500px;
    max-height: 100%;    
  }
  @media (max-width: 375px) {  
    max-width: 375px;
    max-height: 100%;    
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
  }

  @media (max-width: 600px) {
    align-self: start;
  }
`;
