import {
  PageNumber,
  PageTitleContainer,
  PageTitleText,
} from './number-title.styles';

const NumberTitle = ({
  number,
  title,
  columnStart,
  columnEnd,
  rowStart,
  rowEnd,
}) => {
  return (
    <PageTitleContainer
      columnStart={columnStart}
      columnEnd={columnEnd}
      rowStart={rowStart}
      rowEnd={rowEnd}
    >
      <PageNumber>{number}</PageNumber>
      <PageTitleText>{title}</PageTitleText>
    </PageTitleContainer>
  );
};

export default NumberTitle;
