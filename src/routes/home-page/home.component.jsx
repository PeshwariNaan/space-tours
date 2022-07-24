import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../hooks/use-window-size/use-window-size';
import {
  BodyDiv,
  HomeContainer,
  TextDiv,
  HomeTextDiv,
  HomeHeading5,
  HomeHeading1,
  HomeBodyText,
  ButtonDiv,
} from './home.styles';
import HomeButton from '../../components/home-button/home-button.component';
import { useEffect } from 'react';

const Home = () => {
  const [isShort, setIsShort] = useState(false);
  const navigate = useNavigate();
  const goToDestinationsHandler = () => {
    navigate('/space-tours/destinations');
  };

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (height < 700) {
      setIsShort(true);
    }
  }, [height]);

  return (
    <BodyDiv>
      <HomeContainer>
        <TextDiv>
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
        </TextDiv>
        <ButtonDiv>
          <HomeButton clicked={goToDestinationsHandler} short={isShort}>
            <h2>EXPLORE</h2>
          </HomeButton>
        </ButtonDiv>
      </HomeContainer>
    </BodyDiv>
  );
};

export default Home;
