import { BodyDiv, HomeContainer, TestDiv } from "./home.styles"
import HomeTextBox from "../../components/home-text-box/home.textbox.component"


const Home = () => {
  return (
   <BodyDiv>  
    <HomeContainer>
      <TestDiv>
        <HomeTextBox />
      </TestDiv>
    </HomeContainer>
   </BodyDiv>
  )
}

export default Home