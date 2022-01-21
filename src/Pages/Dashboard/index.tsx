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

        </div>
      </BodyContainer>
    </DashboardBackground>
  )

}

export default Dashboard;
