import { SignInDTO } from '@Types/DTO';
import React, { createContext, useState } from 'react';

import {singIn}  from '../service/resources/user';

interface ContextData {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  account_number: number,
  account_digit: number,
  wallet: number,
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<ContextData>({} as ContextData);

  const userSignIn = async (userData: SignInDTO) => {
    
    const { data } = await singIn(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);
  }

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
