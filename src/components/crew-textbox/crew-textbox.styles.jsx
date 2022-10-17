import styled from 'styled-components';

export const CrewDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 0 0 27%;

    @media (max-width: 1200px) {
      margin: 0 0 0 0;
      justify-content: center;
      align-content: center;
    }

    @media (max-width: 500px) {     
      align-content: start;
    }
`;

export const PositionTitle = styled.h4`
  font-family: 'Lora';
  font-size: 3.2rem;
  text-transform: uppercase;
  color: #808080;
  margin: 15rem 0 0 0;

  @media (max-width: 1200px) {
      margin: 5% 0 0 0;
      text-align: center;
    }

    @media (max-width: 500px) {
      margin: 0 0 0 0;
      font-size: 2.2rem;
      
    }
`;

export const Name = styled.h3`
  font-family: 'Lora';
  font-size: 5.6rem;
  text-transform: uppercase;
  color: #ffffff;
  margin: 2.5rem 0 0 0;

  @media (max-width: 1200px) {
      text-align: center;
      margin: 0 0 0 0;
      font-size: 3.6rem;
    }
    @media (max-width: 500px) {
      font-size: 2.8rem;
      margin: 1rem 0 0 0;
      
    }
`;

export const Description = styled.p`
  font-family: 'Barlow Condensed';
  line-height: 1.75;
  letter-spacing: 0.18rem;
  color: #d0d6f9;
  font-size: 2rem;
  margin: 2.5rem 0 1rem 0;
  width: 30vw;

  @media (max-width: 1200px) {
      width: 90vw;
      place-self: center;
      text-align: center;
    }
    @media (max-width: 500px) {
      width: 95vw;
      line-height: 1.5;
    }

`;
