import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";

import { themes } from "./style/themes";
import GlobalStyle from "./style/global/global_styles";

import { Router } from "./routes";

function App (){
  return (
    <ThemeProvider theme={themes.LITE}>
      <AuthProvider>
        <GlobalStyle/>
        <Router/>
      </AuthProvider>
    </ThemeProvider>
  )
}

export default App;
