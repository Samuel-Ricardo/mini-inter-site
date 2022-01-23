import { statement } from "@Types/models";
import { useEffect, useState } from "react";
import { transactions } from "../../../service/resources/pix";
import StatementItem from "./Item";
import { StatementContainer } from "./style";

const Statement = ()  => {

  const [statements, setStatements] = useState<statement[]>([]);

  const getAllTransactions = async () => {
    const { data } = await transactions();
    setStatements(data);
  }

  useEffect(() => { getAllTransactions() }, []);

  return (
    <StatementContainer>
      {statements && statements.map(statement => <StatementItem {...statement}/>)}
    </StatementContainer>
  )
 }

 export default Statement;
