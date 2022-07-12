import {
    TechDataContainer,
    TitleText,
    LeadText,
    BodyText

} from './tech-textbox.styles'

const TechTextbox = ({title, description}) => {
  return (
    <TechDataContainer>
        <LeadText>The terminology...</LeadText>
        <TitleText>{title}</TitleText>
        <BodyText>{description}</BodyText>
    </TechDataContainer>
  )
}

export default TechTextbox