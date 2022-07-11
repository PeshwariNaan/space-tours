import { useState } from 'react';

import {
  BodyDiv,
  MainDiv,
  PageNumber,
  PageTitleContainer,
  PageTitleText,
  PlanetImageContainer,
  MenuContainer,
  PlanetSelect,
  PlanetInfoContainer,
} from './destinations.styles';
import DestinationText from '../../components/destination-textbox/destination-textbox.component';
import planetdata from '../../planetData';

const DestinationsPage = () => {
  const [index, setIndex] = useState(0)

  return (
    <BodyDiv>
      <MainDiv>
        <PageTitleContainer>
          <PageNumber>01</PageNumber>
          <PageTitleText>Pick your destination</PageTitleText>
        </PageTitleContainer>
        <PlanetImageContainer>
          <img
            src={planetdata[index].planetImg}
            alt={planetdata[index].alt}
          />
        </PlanetImageContainer>
        <MenuContainer>
          <PlanetSelect onClick={() => setIndex(0)}>moon</PlanetSelect>
          <PlanetSelect onClick={() => setIndex(1)}>mars</PlanetSelect>
          <PlanetSelect onClick={() => setIndex(2)}>europa</PlanetSelect>
          <PlanetSelect onClick={() => setIndex(3)}>titan</PlanetSelect>
        </MenuContainer>
        <PlanetInfoContainer>
          <DestinationText
            title={planetdata[index].title}
            bodyText={planetdata[index].bodyText}
            aveDistance={planetdata[index].aveDistance}
            estTime={planetdata[index].estTime}
          />
        </PlanetInfoContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default DestinationsPage;
