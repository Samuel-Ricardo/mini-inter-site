import { useNavigate } from "react-router-dom";
import { singin_style } from "./style";

import background_image from '../../assets/images/background-login.jpg';
import Inter_logo from '../../assets/images/Inter-orange.png';

const SingIn = () => {
  const navigate = useNavigate();

  const handleToSingIn = () => { navigate('/dashboard') };

  const {
    Wrapper,
    Background,
    ButtonContainer,
    InputContainer
  } = singin_style;

  return (
    <Wrapper>
      <Background image={background_image}>
        Mike assausque
      </Background>
    </Wrapper>
  )
}

export default SingIn;
