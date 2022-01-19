import styled, { css } from "styled-components";

export const CardContainer = styled.div<{
  width: string;
  heigth: string;
  shadow: boolean;
}>`

  width: ${({ width }) => width};
  height: ${(props) => props.heigth};

  background: ${({ theme }) => theme.COLORS.BACKGROUND};

  ${props => props.shadow === true && css`
      box-shadow: 5pt 4pt 6pt rgba(0, 0, 0, 1)`
  }

  border-radius: 20pt;

  padding: 20pt;

  display: flex;
  align-items: center;
  flex-direction: column;

  z-index: 5000;
`
