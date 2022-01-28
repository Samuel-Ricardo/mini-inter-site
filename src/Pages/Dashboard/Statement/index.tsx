import { statement } from "@Types/models";
import { useEffect, useState } from "react";
import { transactions } from "../../../service/resources/pix";
import StatementItem from "./Item";
import { StatementContainer } from "./style";

const Statement = ()  => {

  const [statements, setStatements] = useState<statement[]>([]);

  const getAllTransactions = async () => {
    let { data } = await transactions();

    data.transactions = data.transactions.filter((item => item.user.firstName))

    setStatements(data.transactions);

    console.log('')
    console.log("transactions")
    console.log(data)
    console.log('')
  }

  useEffect(() => { getAllTransactions() }, []);

  return (
    <StatementContainer>
      {statements && statements.map(statement => <StatementItem {...statement}/>)}
    </StatementContainer>
  )
 }

 export default Statement;
