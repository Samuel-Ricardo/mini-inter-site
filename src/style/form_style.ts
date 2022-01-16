import styled from 'styled-components';

export const Wrapper = styled.main`
  width: 100%;
  height: 100vh;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div<{ image: any }>`
  position: absolute;

  width: 100%;
  height: 50vh;

  top: 0;
  left: 0;

  background-image: url(${(props => props.image)});
  background-size: contain;

  z-index: 1;
`;

export const InputContainer = styled.div`
  flex: 1;
  width: 90%;
  margin-top: 67pt;
`;

export const ButtonContainer = styled.div`
  width: 90%;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 20pt;

  P{
    font-size: 0.75rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.SECONDARY};

    a {
      font-size: 1rem;
      font-weight: 700;
    }
  }

`;

const form_style = {
  Wrapper,
  Background,
  InputContainer,
  ButtonContainer
}

export default form_style;
