import styled from "styled-components";

export const NavList = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    height: 100%;
    width: auto;

    @media (max-width: 500px) {
        flex-flow: column;
    }
`

export const TitleNumbers = styled.h5`
  display: flex;
  flex-direction: row;
  font-family: 'Barlow Condensed';
  font-weight: 700;
  font-size: 1.6rem;
  color: #ffffff;
  margin: 0 1rem 0 0;

    @media(max-width: 1200px) {
      display: none;
      width: 0;
    }
    `;