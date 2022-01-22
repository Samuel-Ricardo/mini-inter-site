import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { routes } from '../config/routes/routes';

import SingIn from '../Pages/SingnIn';
import SignUp from '../Pages/SingnUp';
import Dashboard from '../Pages/Dashboard';

const { DASHBOARD, LOGIN_ROUTES, ROOT } = routes;
const {LOGIN, SIGNIN, SIGNUP} = LOGIN_ROUTES;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<SingIn />} />

        <Route path={LOGIN} element={<SingIn />} />
        <Route path={SIGNUP} element={<SignUp />} />

        <Route path={DASHBOARD} element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}
//
//<Route path='/' element={<SingIn />} />
