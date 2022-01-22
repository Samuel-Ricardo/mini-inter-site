import { useState } from "react";
import { Link } from "react-router-dom";

import { singin_style } from "./style";

import Card from "../../Components/Card";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

import { useNavigate } from "react-router-dom";

import { app_images } from "../../config/app_images";
import { login_routes } from "../../config/routes/login_routes";
import useAuth from "../../hooks/useAuth";
import { routes } from "../../config/routes/routes";

const SingIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {userSignIn} = useAuth();

  const navigate = useNavigate();

  const handleToSingIn = async () => {

    const response = await userSignIn({email,password});

    if(response.id){return navigate(routes.DASHBOARD)}

    alert('Usuário ou senha inválido');
  };

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

      <Card width="403pt">
          <img src={Inter_logo} width={172} height={61} alt="inter logo" />

          <InputContainer>
            <Input placeholder='EMAIL' value={email} onChange={event => setEmail(event.target.value)}/>
            <Input placeholder="SENHA" type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          </InputContainer>

          <ButtonContainer>
            <Button type="button" onClick={handleToSingIn}>Entrar</Button>
            <p>Ainda não tem cadastro? <Link to={login_routes.SIGNUP}>cadastre-se já</Link> </p>
          </ButtonContainer>
      </Card>

    </Wrapper>
  )
}

export default SingIn;
