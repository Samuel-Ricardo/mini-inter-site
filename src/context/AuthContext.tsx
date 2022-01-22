import { SignInDTO, SignUpDTO } from '@Types/DTO';
import React, { createContext, useState } from 'react';

import {me, singIn, singUp}  from '../service/resources/user';

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

  const userSignUp = async (userData: SignUpDTO) => {
    const { data } = await singUp(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);
  }

  const getCurrentUser = async () => {
    const {data} = await me();
  }

  return (
    <AuthContext.Provider value={user}>
      {children}
    </AuthContext.Provider>
  )
}
