import { useState } from 'react';

import {
  BodyDiv,
  CrewImageContianer,
  CrewInfoContainer,
  MainDiv,
  CrewMenuContainer,
  SmallButton,

} from './crew.styles';
import NumberTitle from '../../components/page-number-title/number-title.component';
import CrewTextbox from '../../components/crew-textbox/crew-textbox.component';
import { crewdata as data } from '../../crewData';

const CrewPage = () => {
  const [index, setIndex] = useState(0)

  return (
    <BodyDiv>
      <MainDiv>
        <NumberTitle
          columnStart={1}
          columnEnd={2}
          rowStart={2}
          rowEnd={3}
          number="02"
          title="Meet your crew"
        />
        <CrewInfoContainer>
          <CrewTextbox
            postion={data[index].position}
            name={data[index].name}
            description={data[index].description}
          />
        </CrewInfoContainer>
        <CrewImageContianer>
          <img src={data[index].crewImage} alt={data[index].alt} />
        </CrewImageContianer>
        <CrewMenuContainer>
          <SmallButton onClick={() => setIndex(0)}/>
          <SmallButton onClick={() => setIndex(1)}/>
          <SmallButton onClick={() => setIndex(2)}/>
          <SmallButton onClick={() => setIndex(3)}/>
        </CrewMenuContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default CrewPage;
