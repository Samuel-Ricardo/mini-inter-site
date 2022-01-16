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
`
