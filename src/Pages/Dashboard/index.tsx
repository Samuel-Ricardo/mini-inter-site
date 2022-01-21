import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import { app_classes } from "../../config/style_classes";
import { formatMoney } from "../../utils";
import Statement from "./Statement";
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from "./style";

const Dashboard = () => {

  const wallet = 1000.00;
  const {H2, WALLET, BOLD, PRIMARY_COLOR} = app_classes;

  return (
    <DashboardBackground>
      <Header/>

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
              <Input style={{ flex: 1 }} />
              <Button>Gerar Código</Button>
            </InlineContainer>

            <p className={PRIMARY_COLOR}>Pix copia e cola:</p>
            <p className={PRIMARY_COLOR}>asd10asd1asd1as4d1asd4</p>
          </Card>
          <Card shadow={false} width="90%">
            <InlineTitle>
              <h2 className={H2}>Pagar PIX</h2>
            </InlineTitle>
            <InlineContainer>
              <Input style={{ flex: 1 }} />
              <Button>Pagar PIX</Button>
            </InlineContainer>
          </Card>
        </div>
        <div>
          <Card shadow={false} width="90%">
            <InlineTitle>
              <h2 className={H2}>Extrato da Conta</h2>
            </InlineTitle>
            <Statement/>
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  )

}

export default Dashboard;
