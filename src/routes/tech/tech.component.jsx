import NumberTitle from '../../components/page-number-title/number-title.component';

import { BodyDiv, MainDiv } from './tech.styles';

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
      </MainDiv>
    </BodyDiv>
  );
};

export default TechPage;
