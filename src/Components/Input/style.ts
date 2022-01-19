import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  height: 46pt;

  background: ${({ theme }) => theme.COLORS.BACKGROUND};
  border: 1pt solid ${(props) => props.theme.COLORS.PRIMARY};
  border-radius: 10pt;

  margin-bottom: 20pt;

  display: flex;
  justify-content: center;

  z-index: 5000;

  input {
    font-size: 0.75rem;
    font-weight: 400;

    background: transparent;
    border: 0;

    width: 100%;
    margin: 0 20pt;
  }
`;
