import styled from "styled-components";

export const PageTitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0 0 0 25%;

    @media (max-width: 1200px) {
      padding: 2rem 0 0 3%;
    }
    @media (max-width: 500px) {
      padding: 1rem 0 0 0;
     justify-content: center;
    }
`;

export const PageTitleText = styled.h5`
  font-family: 'Barlow Condensed';
  font-size: 2.8rem;
  font-weight: 300;
  text-transform: uppercase;
  color: #ffffff;
  letter-spacing: 0.475rem;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 2.4rem;
    letter-spacing: 0.275rem;
    }
`;

export const PageNumber = styled.h1`
  font-family: 'Barlow Condensed';
  font-size: 2.8rem;
  font-weight: 600;
  color: #808080;
  margin: 0 2rem;

  @media (max-width: 500px) {
    font-size: 2.4rem;    
    }
`;