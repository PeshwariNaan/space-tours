import styled from 'styled-components';

export const BodyDiv = styled.div`
  background: url(https://res.cloudinary.com/soyousay/image/upload/v1657446652/space_tours/Crew/background-crew-desktop_r5rlmr.jpg)
    no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;
`;

export const MainDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: [row1-start] 24vh [row1-end row2-start] 8vh [row2-end row3-start] 56vh [row3-end row4-start] 12vh;
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
  display: flex;
  flex-direction: row;
  font-family: 'Barlow Condensed';
  font-size: 2.8rem;
  font-weight: 600;
  color: #333333;
  margin: 0 2rem;
`;
