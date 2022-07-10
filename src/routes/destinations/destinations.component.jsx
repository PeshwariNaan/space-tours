import {
  BodyDiv,
  MainDiv,
  PageNumber,
  PageTitleContainer,
  PageTitleText,
  PlanetImageContainer,
  MenuContainer,
  PlanetSelect,
} from './destinations.styles';

const DestinationsPage = () => {
  return (
    <BodyDiv>
      <MainDiv>
        <PageTitleContainer>
          <PageNumber>01</PageNumber>
          <PageTitleText>Pick your destination</PageTitleText>
        </PageTitleContainer>
        <PlanetImageContainer>
          <img
            src="https://res.cloudinary.com/soyousay/image/upload/v1657446587/space_tours/Destinations/image-moon_mdz89x.webp"
            alt="moon-img"
          />
        </PlanetImageContainer>
        <MenuContainer>
          <PlanetSelect>moon</PlanetSelect>
          <PlanetSelect>mars</PlanetSelect>
          <PlanetSelect>europa</PlanetSelect>
          <PlanetSelect>titan</PlanetSelect>
        </MenuContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default DestinationsPage;
