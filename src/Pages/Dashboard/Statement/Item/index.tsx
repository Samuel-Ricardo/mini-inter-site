import { statement } from "@Types/models";
import { app_classes } from "../../../../config/style_classes";

import {FiDollarSign} from 'react-icons/fi'

import { StatementItemContainer, StatementItemImage, StatementItemInfo } from "./style";
import { format } from "date-fns";

const StatementItem = ({type, updatedAt, user, value}: statement) => {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24}/>
      </StatementItemImage>
      <StatementItemInfo>
        <p className={app_classes.PRIMARY_COLOR}>
          {value.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
        </p>
        <p>{type === 'pay' ? `Pago a` : `Recebido de`} <strong>{user.first_name} {user.last_name}</strong> </p>
        <p>{format(updatedAt, "dd/MM/yyyy ' às ' HH:mm'h'")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  )
}
export default StatementItem;

