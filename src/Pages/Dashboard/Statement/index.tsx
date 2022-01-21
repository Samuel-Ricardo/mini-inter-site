import { statement } from "@Types/models";
import StatementItem from "./Item";
import { StatementContainer } from "./style";

const Statement = ()  => {

  const statements:statement[] = [

    {
      user:{
          first_name: 'Pablo',
          last_name: 'Henrique'
      },
      value: 250.00,
      type: 'pay',
      updatedAt: new Date()
  },
  {
      user:{
          first_name: 'José',
          last_name: 'Santos'
      },
      value: 270.00,
      type: 'received',
      updatedAt: new Date()
    },

    {
      user:{
          first_name: 'Pablo',
          last_name: 'Henrique'
      },
      value: 250.00,
      type: 'pay',
      updatedAt: new Date()
  },
  {
      user:{
          first_name: 'José',
          last_name: 'Santos'
      },
      value: 270.00,
      type: 'received',
      updatedAt: new Date()
  }

  ]

  return (
    <StatementContainer>
      {statements.map(statement => <StatementItem {...statement}/>)}
    </StatementContainer>
  )
 }

 export default Statement;
