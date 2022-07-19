import { useState } from 'react';
import NumberTitle from '../../components/page-number-title/number-title.component';
import TechTextbox from '../../components/tech-textbox/tech-textbox.component';
import { techdata as data } from '../../techdata';
import useWindowDimensions from '../../hooks/use-window-size/use-window-size';
import {
  BodyDiv,
  ButtonContainer,
  MainDiv,
  TechImageContainer,
  TechInfoContainer,
  TextContainer,
  TechButton,
  PageTitleNumberContainer
} from './tech.styles';

const TechPage = () => {
  const [index, setIndex] = useState(0)

  const { width } = useWindowDimensions();

  return (
    <BodyDiv>
      <MainDiv>
        <PageTitleNumberContainer>
        <NumberTitle
          columnStart={1}
          columnEnd={2}
          rowStart={2}
          rowEnd={3}
          number="03"
          title="Space launch 101"
        />
        </PageTitleNumberContainer>
        <TechInfoContainer>
          <TextContainer>
            <TechTextbox
              title={data[index].title}
              description={data[index].description}
            />
          </TextContainer>
          <ButtonContainer>
            <TechButton onClick={() => setIndex(0)}>1</TechButton>
            <TechButton onClick={() => setIndex(1)}>2</TechButton>
            <TechButton onClick={() => setIndex(2)}>3</TechButton>            
          </ButtonContainer>
        </TechInfoContainer>
        <TechImageContainer>
          <img src={width > 1200 ? data[index].imgLarge : data[index].imgTablet} alt={data[0].alt} />
        </TechImageContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default TechPage;
