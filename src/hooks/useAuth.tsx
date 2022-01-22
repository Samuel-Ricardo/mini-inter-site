import { useContext } from 'react';
import {AuthContext} from '../context/AuthContext'

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("No context found");
  return context
}

export default useAuth;
