import styled from "styled-components";

export const StatementItemContainer = styled.div`
    display: flex;
    width: 100%;
`

export const StatementItemInfo = styled.div`
    p{ margin-bottom: 2px; }
`

export const StatementItemImage = styled.div<{
  type: 'pay' | 'received'
}>`

  width: 60pt;
  height: 60pt;

  margin-right: 20pt;
  margin-top: 20pt;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10pt;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};

  background-color: ${({ type, theme }) => type === 'pay' ? theme.COLORS.RED : theme.COLORS.GREEN};
`;
