import {
  PlanetDataContainer,
  PlanetTitle,
  PlanetBodyText,
  Hrule,
  PlanetSpecsContainer,
  SpecsText,
  SpecsValueContainer,
  SpecValueText,
} from './destination-textbox.styles';

const DestinationText = ({ title, aveDistance, estTime, bodyText }) => {
  return (
    <PlanetDataContainer>
      <PlanetTitle>{title}</PlanetTitle>
      <PlanetBodyText>{bodyText}</PlanetBodyText>
      <Hrule />
      <PlanetSpecsContainer>
        <SpecsText>Avg. Distance</SpecsText><SpecsText>Est. Travel Time</SpecsText>
      </PlanetSpecsContainer>
      <SpecsValueContainer>
        <SpecValueText>{aveDistance}</SpecValueText><SpecValueText>{estTime}</SpecValueText>
      </SpecsValueContainer>
    </PlanetDataContainer>
  );
};

export default DestinationText;
