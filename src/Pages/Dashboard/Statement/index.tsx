import { Statement } from "@Types/models";
import { app_classes } from "../../../config/style_classes";
import { StatementItemContainer, StatementItemImage, StatementItemInfo } from "./style";

const StatementItem = ({type, updatedAt, user, value}: Statement) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>

      </StatementItemImage>
      <StatementItemInfo>
        <p className={app_classes.PRIMARY_COLOR}>
          {value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </p>
        <p>{type === 'pay' ? `Pago a` : `Recebido de`} <strong>{user.first_name} {user.last_name}</strong> </p>
        <p></p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}
export default StatementItem;

