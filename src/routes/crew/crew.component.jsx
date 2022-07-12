import { BodyDiv, MainDiv } from "./crew.styles";
import NumberTitle from "../../components/page-number-title/number-title.component";

const CrewPage = () => {
  return (
  <BodyDiv>  
    <MainDiv>
      <NumberTitle 
      columnStart={1}
      columnEnd={2}
      rowStart={2}
      rowEnd={3}
      number='02'
      title='Meet your crew'
      />
    </MainDiv>
    
   </BodyDiv>
  )
};

export default CrewPage;
