import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import Statement from "./Statement";

import { routes } from "../../config/routes/routes";
import { app_classes } from "../../config/style_classes";

import useAuth from "../../hooks/useAuth";
import {request} from '../../service/resources/pix';

import { formatMoney, set } from "../../utils";
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from "./style";

const Dashboard = () => {

  const { user, getCurrentUser } = useAuth();
  const navigate = useNavigate();

  const [key, setKey] = useState('');
  const [generatedKey, setGeneratedKey] = useState('');
  const [value, setValue] = useState();

  useEffect(() => { getCurrentUser() }, []);

  if (!user) {
    alert('Nenhum usuário logado foi encontrado no sistema');
    navigate(routes.ROOT);
  }

  const wallet = user.wallet;
  const { H2, WALLET, BOLD, PRIMARY_COLOR } = app_classes;

  const handleNewPayment = async () => {
    const { data } = await request(Number(value));
  }

  return (
    <DashboardBackground>
      <Header />

      <BodyContainer>
        <div>
          <Card shadow={false} width="90%">
            <InlineTitle>
              <h2 className={H2}>Saldo Atual</h2>
            </InlineTitle>
            <InlineContainer>
              <h3 className={WALLET}>
                {formatMoney(wallet)}
              </h3>
            </InlineContainer>
          </Card>
          <Card shadow={false} width="90%">
            <InlineTitle>
              <h2 className={H2}>Receber PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }}
                value={value} onChange={e => set(e, setValue)} placeholder="Insira o Valor"
              />
              <Button>Gerar Código</Button>
            </InlineContainer>

            {generatedKey && (
              <>
                <p className={PRIMARY_COLOR}>Pix copia e cola:</p>
                <p className={PRIMARY_COLOR}>{generatedKey}</p>
              </>
            )}
          </Card>
          <Card shadow={false} width="90%">
            <InlineTitle>
              <h2 className={H2}>Pagar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input
                style={{ flex: 1 }} value={key} onChange={e => set(e, setKey)} placeholder="Insira o PIX" />
              <Button>Pagar PIX</Button>
            </InlineContainer>
          </Card>
        </div>
        <div>
          <Card shadow={false} width="90%">
            <InlineTitle>
              <h2 className={H2}>Extrato da Conta</h2>
            </InlineTitle>
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )

}

export default Dashboard;
