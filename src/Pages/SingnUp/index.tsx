import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Input from "../../Components/Input";

import { app_images } from "../../config/app_images";

import { routes } from "../../config/routes/routes";
import { login_routes } from "../../config/routes/login_routes";

import { signup_style } from "./style";

const SignUp = () => {

  const navigate = useNavigate();

  const handleToDashboard = () => {
    navigate(routes.DASHBOARD)
  }

  const {
    Wrapper,
    Background,
    ButtonContainer,
    InputContainer
  } = signup_style;

  return (
    <Wrapper>
      <Background image={app_images.background_image}/>
      <Card width="403pt" margin="10%">
        <img src={app_images.Inter_logo} width={172} height={61} alt="logo inter" />

        <InputContainer>

          <Input placeholder="NOME"/>
          <Input placeholder="SOBRENOME"/>
          <Input placeholder="EMAIL"/>
          <Input placeholder="SENHA" type="password"/>
          <Input placeholder="CONFIRMAR SENHA" type="password"/>

        </InputContainer>

        <ButtonContainer>
          <Button type="button" onClick={handleToDashboard}>CADASTRE-SE</Button>
          <p>Já tem uma conta? <Link to={login_routes.LOGIN}>Entre já</Link></p>
        </ButtonContainer>

      </Card>
    </Wrapper>
  )
}

export default SignUp;
