import { BigRoundButton } from "./home-button.styles "

const HomeButton = ({clicked, children, short}) => {
  return (
    <BigRoundButton onClick={clicked} short={short}>{children}</BigRoundButton>
  )
}

export default HomeButton