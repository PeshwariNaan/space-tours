import {
  BodyDiv,
  HomeContainer,
  TestDiv,
  HomeTextDiv,
  HomeHeading5,
  HomeHeading1,
  HomeBodyText,
} from './home.styles';

const Home = () => {
  return (
    <BodyDiv>
      <HomeContainer>
        <TestDiv>
          <HomeTextDiv>
            <HomeHeading5>SO, YOU WANT TO TRAVEL TO </HomeHeading5>
            <HomeHeading1>SPACE</HomeHeading1>
            <HomeBodyText>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </HomeBodyText>
          </HomeTextDiv>
        </TestDiv>
      </HomeContainer>
    </BodyDiv>
  );
};

export default Home;
