import {
  PageNumber,
  PageTitleContainer,
  PageTitleText,
} from './number-title.styles';

const NumberTitle = ({
  number,
  title,
}) => {
  return (
    <PageTitleContainer>
      <PageNumber>{number}</PageNumber>
      <PageTitleText>{title}</PageTitleText>
    </PageTitleContainer>
  );
};

export default NumberTitle;
