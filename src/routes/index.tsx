import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { routes } from '../config/routes';
import SingIn from '../Pages/SingnIn';

const {LOGIN,  ROOT, SINGIN} = routes;

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROOT} element={<SingIn />} />
        <Route path={LOGIN} element={<SingIn />} />
      </Routes>
    </BrowserRouter>
  )
}
//
//<Route path='/' element={<SingIn />} />
