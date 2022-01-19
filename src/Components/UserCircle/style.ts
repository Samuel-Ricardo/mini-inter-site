import styled from "styled-components";

export const CircleContainer = styled.div`

  width: 74pt;
  height: 74pt;

  border: 1pt solid ${({theme}) => theme.COLORS.PRIMARY};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 20pt;

  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-weight: 300;
  font-size: 2rem;
`
