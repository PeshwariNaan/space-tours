import {
  CrewDataContainer,
  Name,
  PositionTitle,
  Description,
} from './crew-textbox.styles';

const CrewTextbox = ({ postion, name, description }) => {
  return (
    <CrewDataContainer>
      <PositionTitle>{postion}</PositionTitle>
      <Name>{name}</Name>
      <Description>{description}</Description>
    </CrewDataContainer>
  );
};

export default CrewTextbox;
