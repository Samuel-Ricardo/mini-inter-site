import { Route, Routes } from "react-router-dom";
import SingIn from "../../Pages/SingnIn";

export const LoginRoutes = () => (
  <Routes>
    <Route path='login' element={<SingIn/>}/>
  </Routes>
)
