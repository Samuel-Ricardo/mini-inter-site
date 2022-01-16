import { createGlobalStyle } from "styled-components";

const global_style = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16pt;
  }

  body {
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
  }

  input, button, textarea, select {
    font-family: Roboto , 'sans-serif';
  }

  input:focus, textarea:focus, select:focus{
    outline:none;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PRIMARY};

    &:hover {
      filter: opacity(0.8);
    }
  }

  .primary-color{
    color: ${({theme}) => theme.COLORS.PRIMARY}
  }

  .bold{
    font-weight: 700;
  }

  h2 {
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28pt;
    color: ${({theme}) => theme.COLORS.H2};
  }

  .wallet{
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
    font-size: 2.5rem; //~40px
    line-height: 47pt;
  }
`
export default global_style;
