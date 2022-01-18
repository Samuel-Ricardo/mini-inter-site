import styled from "styled-components";

export const ButtonContainer = styled.button`

  width: 100%;
  height: 46pt;

  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  border: 1pt solid ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: 10pt;

  margin-bottom: 20pt;

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 5000;

  &:hover{
    filter: opacity(0.8);
  };

  &:disabled{
    filter: opacity(0.4);
  }
`
