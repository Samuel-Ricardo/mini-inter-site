import { CardContainer } from "./style";

interface CardProps {
  width?: string,
  children?: React.ReactNode;
  height?: string,
  shadow?: boolean
}

const Card = ({
  children,
  width = '100%',
  height = 'auto',
  shadow = true,
}: CardProps) => {
  return (
    <CardContainer width={width} heigth={height} shadow={shadow}>
      {children}
    </CardContainer>
  )
}

export default Card;
