import { ThemeProvider } from "styled-components";
import { Router } from "./routes";
import GlobalStyle from "./style/global_styles";
import { themes } from "./style/themes";

function App (){
  return (
    <ThemeProvider theme={themes.LITE}>
      <GlobalStyle/>
      <Router/>
    </ThemeProvider>
  )
}

export default App;
