import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SingIn from '../Pages/SingnIn';
import { LoginRoutes } from './login';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginRoutes/>}/>
    </Routes>
  </BrowserRouter>
)
//
//<Route path='/' element={<SingIn />} />
