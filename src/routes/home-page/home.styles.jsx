import styled from 'styled-components';
import homeImage from '../../assets/background-home-desktop.jpg';

export const BodyDiv = styled.div`
  background: url(${homeImage}) no-repeat;
  overflow: hidden;
  background-size: cover;
  height: 100vh;
  background-position: center center;
`;

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: [row1-start] 40vh [row1-end row2-start] 60vh [row2-end];
  
`;

export const TestDiv = styled.div`
  grid-column: 1 / 2;
  grid-row: 2;
  margin-left: 27%;
  align-content: flex-end;
  
`


export const HomeTextDiv = styled.div`
     display: flex;
     flex-direction: column;
    
     width: min-content;
     height: 20rem;
`


export const HomeHeading1 = styled.h1`
    font-family: 'Bellefair';
    font-size: 15rem;
    color: #ffffff;
    margin-top: 0;
    margin-bottom: 0;
`


export const HomeHeading5 = styled.h5`
 font-family: 'Barlow Condensed';
 font-size: 2.8rem;
 color: #D0D6F9;
 letter-spacing: .475rem;
 margin-bottom: 1rem;
`

export const HomeBodyText = styled.p`
    font-family: 'Barlow Condensed';
    line-height: 1.75;
    letter-spacing: .18rem;
    color: #D0D6F9;
    font-size: 2rem;
    margin-top: .5rem;
`

