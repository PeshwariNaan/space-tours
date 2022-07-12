import {
  BodyDiv,
  CrewImageContianer,
  CrewInfoContainer,
  MainDiv,
} from './crew.styles';
import NumberTitle from '../../components/page-number-title/number-title.component';
import CrewTextbox from '../../components/crew-textbox/crew-textbox.component';
import { crewdata as data } from '../../crewData';

const CrewPage = () => {
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
            postion={data[0].position}
            name={data[0].name}
            description={data[0].description}
          />
        </CrewInfoContainer>
        <CrewImageContianer>
          <img src={data[0].crewImage} alt={data[0].alt} />
        </CrewImageContianer>
      </MainDiv>
    </BodyDiv>
  );
};

export default CrewPage;
