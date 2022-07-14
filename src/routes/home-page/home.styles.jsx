import styled from 'styled-components';


export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446748/space_tours/Home/background-home-desktop_r7snbq.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;

    @media(max-width: 768px) {
      background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446748/space_tours/Home/background-home-tablet_a54qxg.jpg) no-repeat;
    }

    @media(max-width: 375px) {
      background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446748/space_tours/Home/background-home-mobile_qfafst.jpg) no-repeat;
    }
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: [row1-start] 40vh [row1-end row2-start] 60vh [row2-end];

    @media (max-width: 1200px) {
      grid-template-columns: 1;
      grid-template-rows: [row1-start] 10vh [row1-end row2-start] 50vh [row2- end row3-start] 30vh [row3-end];
    }
`;

export const TextDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  /* margin-left: 27%;
  align-content: flex-end; */
  justify-self: center;

    @media (max-width: 1200px) {
      grid-column: 1 / 3;
      grid-row: 2;
      margin-left: 0;
      justify-self: center;
    }
`;

export const HomeTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  height: 20rem;

    @media (max-width: 1200px) {
      align-items: center;
    }
`;

export const HomeHeading1 = styled.h1`
  font-family: 'Lora';
  font-weight: 100;
  font-size: 15rem;
  text-transform: uppercase;
  color: #ffffff;
  margin-top: 0;
  margin-bottom: 0;
`;

export const HomeHeading5 = styled.h5`
  font-family: 'Barlow Condensed';
  font-weight: 300;
  font-size: 2.8rem;
  color: #d0d6f9;
  letter-spacing: 0.475rem;
  margin-bottom: 1rem;
`;

export const HomeBodyText = styled.p`
  font-family: 'Barlow Condensed';
  line-height: 1.75;
  letter-spacing: 0.18rem;
  color: #d0d6f9;
  font-size: 2rem;
  margin-top: 0.5rem;
  
    @media (max-width: 1200px) {
      text-align: center;
    }
`;

export const ButtonDiv = styled.div`
  grid-column: 2 / 3;
  grid-row: 2;
  place-self: center;

    @media (max-width: 1200px) {
      grid-column: 1 / 3;
      grid-row: 3;
    }
`;

