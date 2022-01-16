import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<div>Pedro Sites Estilizados e Roteados</div>}/>
    </Routes>
  </BrowserRouter>
)
