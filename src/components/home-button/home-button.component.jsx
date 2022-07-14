import { BigRoundButton } from "./home-button.styles "

const HomeButton = ({children, ...otherProps}) => {
  return (
    <BigRoundButton {...otherProps}>{children}</BigRoundButton>
  )
}

export default HomeButton