import { useState } from 'react';
import NumberTitle from '../../components/page-number-title/number-title.component';

import {
  BodyDiv,
  MainDiv,
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
        <NumberTitle
        columnStart={1}
        columnEnd={2}
        rowStart={2}
        rowEnd={3}
        number='01'
        title='Pick your destination'
        />
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
