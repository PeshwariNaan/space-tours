import styled from 'styled-components';

export const TechDataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleText = styled.h3`
  font-family: 'Lora';
  font-size: 5.6rem;
  text-transform: uppercase;
  color: #ffffff;
  margin: 2.5rem 0 0 0;

  @media (max-width: 1200px) {
    margin: 1rem 0 0 0;
  }

  @media (max-width: 1079px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    font-size: 3.2rem;
  }
`;

export const LeadText = styled.p`
  font-family: 'Barlow Condensed';
  font-size: 1.6rem;
  letter-spacing: 0.27rem;
  text-transform: uppercase;
  color: #d0d6f9;
  margin: 10rem 0 0 0;

  @media (max-width: 1200px) {
    margin: 2rem 0 0 0;
  }

  @media (max-width: 1079px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const BodyText = styled.p`
  font-family: 'Barlow Condensed';
  line-height: 1.75;
  letter-spacing: 0.18rem;
  color: #d0d6f9;
  font-size: 2rem;

  @media (max-width: 1079px) {
    text-align: center;
  }

  @media (max-width: 500px) {
    line-height: 1.5;
    letter-spacing: .12rem;
    font-size: 1.8rem;
  }
`;
