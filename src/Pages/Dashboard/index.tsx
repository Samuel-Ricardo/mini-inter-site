import Button from "../../Components/Button";
import Card from "../../Components/Card";
import Header from "../../Components/Header";
import Input from "../../Components/Input";
import { app_classes } from "../../config/style_classes";
import { formatMoney } from "../../utils";
import { BodyContainer, DashboardBackground, InlineContainer, InlineTitle } from "./style";

const Dashboard = () => {

  const wallet = 1000.00;
  const {H2, WALLET} = app_classes;

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
          </Card>

        </div>
      </BodyContainer>
    </DashboardBackground>
  )

}

export default Dashboard;
