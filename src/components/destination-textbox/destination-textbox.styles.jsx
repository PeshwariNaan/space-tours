import styled from 'styled-components';

export const PlanetDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  //height: 20rem;
`;

export const PlanetTitle = styled.h1`
  font-family: 'Lora';
  font-weight: 100;
  font-size: 10rem;
  color: #ffffff;
  margin: 0 10rem 0 0;
`;

export const PlanetBodyText = styled.p`
  font-family: 'Barlow Condensed';
  line-height: 1.75;
  letter-spacing: 0.18rem;
  color: #d0d6f9;
  font-size: 2rem;
  margin: 0 0 2.5rem 0;
`;

export const PlanetSpecsContainer = styled.div`
  display: flex;
  flex-direction: row;  
  margin: 0 0 0 0;
`;

export const SpecsText = styled.h2`
  display: flex;
  flex-direction: row;
  font-family: 'Barlow Condensed';
  font-size: 1.4rem;
  font-weight: 300;
  letter-spacing: 0.235rem;
  color: #d0d6f9;
  text-transform: uppercase;
  margin: 2rem auto 0 0;
  justify-self: start;
`;

export const SpecsValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 0 0;
`;

export const SpecValueText = styled.h3`
    font-family: 'lola';
    font-size: 2.4rem;
    font-weight: 100;
    color: #ffffff;
    margin: 2rem auto 0 0;
    justify-self: start;
`;

export const Hrule = styled.hr`
  width: 30vw;
  border: 1px solid;
  color: #d0d6f9;
  opacity: 0.3;
`;
