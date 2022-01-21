import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { routes } from '../config/routes/routes';

import SingIn from '../Pages/SingnIn';
import SignUp from '../Pages/SingnUp';

const {LOGIN,  ROOT, SIGNIN: SINGIN, DASHBOARD, SIGNUP} = routes;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<SingIn />} />

        <Route path={LOGIN} element={<SingIn />} />
        <Route path={SIGNUP} element={<SignUp />} />

        <Route path={DASHBOARD} />
      </Routes>
    </BrowserRouter>
  )
}
//
//<Route path='/' element={<SingIn />} />
