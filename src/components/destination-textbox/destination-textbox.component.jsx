import {
  PlanetDataContainer,
  PlanetTitle,
  PlanetBodyText,
  Hrule,
  PlanetSpecsContainer,
  SpecsText,
  SpecValueText,
  ValuesContainer,
} from './destination-textbox.styles';

const DestinationText = ({ title, aveDistance, estTime, bodyText }) => {
  return (
    <PlanetDataContainer>
      <PlanetTitle>{title}</PlanetTitle>
      <PlanetBodyText>{bodyText}</PlanetBodyText>
      <Hrule />
      <PlanetSpecsContainer>
        <ValuesContainer>
          <SpecsText>Avg. Distance</SpecsText>
          <SpecValueText>{aveDistance}</SpecValueText>
        </ValuesContainer>
        <ValuesContainer>
        <SpecsText>Est. Travel Time</SpecsText>
          <SpecValueText>{estTime}</SpecValueText>
        </ValuesContainer>       
      </PlanetSpecsContainer>
     
    </PlanetDataContainer>
  );
};

export default DestinationText;
