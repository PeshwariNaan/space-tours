import NumberTitle from '../../components/page-number-title/number-title.component';
import TechTextbox from '../../components/tech-textbox/tech-textbox.component';
import { techdata as data } from '../../techdata';
import {
  BodyDiv,
  ButtonContainer,
  MainDiv,
  TechImageContainer,
  TechInfoContainer,
  TextContainer,
} from './tech.styles';

const TechPage = () => {
  return (
    <BodyDiv>
      <MainDiv>
        <NumberTitle
          columnStart={1}
          columnEnd={2}
          rowStart={2}
          rowEnd={3}
          number="03"
          title="Space launch 101"
        />
        <TechInfoContainer>
          <TextContainer>
            <TechTextbox
              title={data[0].title}
              description={data[0].description}
            />
          </TextContainer>
        </TechInfoContainer>
        <TechImageContainer>
          <img src={data[0].img} alt={data[0].alt} />
        </TechImageContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default TechPage;
