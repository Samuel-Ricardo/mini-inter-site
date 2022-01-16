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

const form_style = {
  Wrapper,
  Background
}

export default form_style;
