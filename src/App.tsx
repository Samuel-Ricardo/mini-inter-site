import { ThemeProvider } from "styled-components";
import GlobalStyle from "./style/global_styles";
import { themes } from "./style/themes";

function App (){
  return (
    <ThemeProvider theme={themes.LITE}>
      <GlobalStyle/>
      Pedro Sites Estilizados
    </ThemeProvider>
  )
}

export default App;
