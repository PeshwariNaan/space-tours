import styled from 'styled-components';

export const PlanetDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  
  @media (max-width: 1070px) {
    width: fit-content;
  }
`;

export const PlanetTitle = styled.h2`
  font-family: 'Lora';
  font-weight: 100;
  font-size: 10rem;
  color: #ffffff;
  margin: 0 10rem 0 0;
  text-align: left;
  @media (max-width: 1070px) {
    text-align: center;
    place-self: center;
    margin: 0 0 0 0;
  }

  @media (max-width: 500px) {
    font-size: 7rem;
  }
`;

export const PlanetBodyText = styled.p`
  font-family: 'Barlow Condensed';
  line-height: 1.75;
  letter-spacing: 0.18rem;
  color: #d0d6f9;
  font-size: 2rem;
  margin: 0 0 2.5rem 0;
  text-align: left;
  @media (max-width: 1070px) {
    text-align: center;
    margin: 0 5% 2rem 5%;
    line-height: 1.5;
    font-size: 1.75rem;
  }
`;

export const PlanetSpecsContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2.5rem 0 0 0;
  justify-content: flex-start;

  @media (max-width: 1070px) {
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const ValuesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 1070px) {
    justify-content: center;
  }

  @media (max-width: 500px) {
    :last-child {
      margin-top: 4rem;
    }
  }
`;

export const SpecsText = styled.h5`
  font-family: 'Barlow Condensed';
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.235rem;
  color: #d0d6f9;
  text-transform: uppercase;
  margin: 0 10rem 0 0;

  @media (max-width: 1070px) {
    place-self: center;
    margin: 0 0 2rem 0;
  }
`;

export const SpecValueText = styled.h5`
  font-family: 'lola';
  font-size: 2.4rem;
  font-weight: 100;
  color: #ffffff;
  margin: 2rem auto 0 0;

  @media (max-width: 1070px) {
    place-self: center;
    margin: 0 0 0 0;
  }
`;

export const Hrule = styled.hr`
  width: 100%;
  border: 1px solid;
  color: #d0d6f9;
  opacity: 0.3;

  @media (max-width: 1070px) {
    width: 90vw;
  }
`;
