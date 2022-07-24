import styled from 'styled-components';

export const BigRoundButton = styled.button`
  height: 20rem;
  width: 20rem;
  font-family: 'Lora';
  font-size: 1.6rem;
  letter-spacing: 0.475rem;
  background-color: #ffffff;
  cursor: pointer;
  color: black;
  border-radius: 50%;
  border-style: none;
  text-align: center;

  :hover {
    outline: 8rem solid #222222;
  }

  @media (max-width: 500px) {
    height: ${props => props.short? '12rem': '17rem'};
    width: ${props => props.short? '12rem': '17rem'};
    font-size: ${props => props.short? '1.2rem': '1.5rem'};
    letter-spacing: 0.235rem;
  }

 
`;
