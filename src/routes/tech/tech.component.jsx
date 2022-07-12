import NumberTitle from '../../components/page-number-title/number-title.component';
import TechTextbox from '../../components/tech-textbox/tech-textbox.component';
import {
  BodyDiv,
  ButtonContainer,
  MainDiv,
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
            <TechTextbox />
          </TextContainer>
        </TechInfoContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default TechPage;
