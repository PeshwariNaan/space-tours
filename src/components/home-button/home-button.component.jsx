import { BigRoundButton } from "./home-button.styles "

const HomeButton = (props) => {
  return (
    <BigRoundButton>{props.children}</BigRoundButton>
  )
}

export default HomeButton