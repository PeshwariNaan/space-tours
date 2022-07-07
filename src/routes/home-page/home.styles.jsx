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

