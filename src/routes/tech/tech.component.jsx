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
  PageTitleNumberContainer,
} from './tech.styles';

const TechPage = () => {
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState('1');

  const { width } = useWindowDimensions();

  const handleClick = (id) => {
    setActive(id);
  };

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
            <TechButton
              id="1"
              onClick={(e, id) => {
                setIndex(0);
                handleClick('1');
              }}
              isSelected={active === '1' ? true : false}
            >
              1
            </TechButton>
            <TechButton
              id="2"
              onClick={() => {
                setIndex(1);
                handleClick('2');
              }}
              isSelected={active === '2' ? true : false}
            >
              2
            </TechButton>
            <TechButton
              id="3"
              onClick={(e) => {
                setIndex(2);
                handleClick('3');
              }}
              isSelected={active === '3' ? true : false}
            >
              3
            </TechButton>
          </ButtonContainer>
        </TechInfoContainer>
        <TechImageContainer>
          <img
            src={width > 1200 ? data[index].imgLarge : data[index].imgTablet}
            alt={data[0].alt}
          />
        </TechImageContainer>
      </MainDiv>
    </BodyDiv>
  );
};

export default TechPage;
