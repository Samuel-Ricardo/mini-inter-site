import { useNavigate } from "react-router-dom";
import { singin_style } from "./style";

import { app_images } from "../../config/app_images";
import Card from "../../Components/Card";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { routes } from "../../config/routes";

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
      <Background image={background_image}/>

      <Card width="403pt" height='auto'>
          <img src={Inter_logo} width={172} height={61} alt="inter logo" />

          <InputContainer>
            <Input placeholder='EMAIL'/>
            <Input placeholder="SENHA" type='password'/>
          </InputContainer>

          <ButtonContainer>
            <Button type="button" onClick={handleToSingIn}>Entrar</Button>
            <p>Ainda não tem cadastro? <Link to={routes.SIGNUP}>Cadastre-se Já ;)</Link> </p>
          </ButtonContainer>
      </Card>

    </Wrapper>
  )
}

export default SingIn;
