import { useState } from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Input from "../../Components/Input";

import { app_images } from "../../config/app_images";

import { routes } from "../../config/routes/routes";
import { login_routes } from "../../config/routes/login_routes";

import { signup_style } from "./style";
import { SignUpDTO } from '@Types/DTO';

const SignUp = () => {

  const {userSignUp} = useAuth();

  const navigate = useNavigate();

  const [first_name, setName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');

  const isEmpty = (text:string): boolean => {
    return text.length === 0;
  }

  const IsfieldsEmpty = (): boolean => {
    
    if (isEmpty(first_name)) return false;
    if (isEmpty(last_name)) return false;
    if (isEmpty(email)) return false;
    if (isEmpty(password)) return false;
    if (isEmpty(confirmPass)) return false;

    return true;
  }

  const handleToDashboard = async () => {

    if(IsfieldsEmpty()){
      if (password === confirmPass) {
        const user: SignUpDTO = {
          first_name,
          last_name,
          email,
          password
        }

        const response = await userSignUp(user);

        if (response.id) return navigate(routes.DASHBOARD);

        return alert('Erro ao Cadastrar');

      } else { return alert('As senhas não estão iguais') }
    } else { return alert('Nenhum campo pode estar vazio') }
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

          <Input placeholder="NOME"
            value={first_name}
            onChange={e => setName(e.target.value)}
          />

          <Input placeholder="SOBRENOME"
            value={last_name}
            onChange={e => setLastName(e.target.value)}
          />

          <Input placeholder="EMAIL" type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

          <Input placeholder="SENHA" type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <Input placeholder="CONFIRMAR SENHA" type="password"
            value={confirmPass}
            onChange={e => setConfirmPass(e.target.value)}
          />

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
