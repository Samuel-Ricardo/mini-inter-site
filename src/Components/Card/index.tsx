import { CSSProperties } from "styled-components";
import { CardContainer } from "./style";

interface CardProps {
  width?: string,
  children?: React.ReactNode;
  height?: string,
  margin?: string,
  shadow?: boolean,
  style?: CSSProperties
}

const Card = ({
  children,
  width = '100%',
  height = 'auto',
  margin = 'auto',
  shadow = true,
  style
}: CardProps) => {
  return (
    <CardContainer
      style={style}
      width={width}
      heigth={height}
      shadow={shadow}
      margin={margin}
    >
      {children}
    </CardContainer>
  )
}

export default Card;
