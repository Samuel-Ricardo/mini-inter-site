import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import SingIn from '../Pages/SingnIn';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<SingIn/>} />
      <Route path='/login' element={<SingIn/>} />
    </Routes>
  </BrowserRouter>
)
//
//<Route path='/' element={<SingIn />} />
