import { useNavigate } from "react-router-dom";
import { singin_style } from "./style";

import { app_images } from "../../config/app_images";

const SingIn = () => {

  const navigate = useNavigate();

  const handleToSingIn = () => { navigate('/dashboard') };

  const { Inter_logo, background_image } = app_images;

  const {
    Wrapper,
    Background,
    ButtonContainer,
    InputContainer
  } = singin_style;

  return (
    <Wrapper>
      <Background image={Background}>
        Mike assausque
      </Background>
    </Wrapper>
  )
}

export default SingIn;
