import { SignInDTO, SignUpDTO } from '@Types/DTO';
import React, { createContext, useState } from 'react';

import {me, singIn, singUp}  from '../service/resources/user';

interface UserDTO {
  id: string,
  first_name: string,
  last_name: string,
  email: string,
  account_number: number,
  account_digit: number,
  wallet: number,
}

interface ContextData {
  user: UserDTO,
  userSignIn: (userData: SignInDTO) => Promise<UserDTO>;
  userSignUp: (userData: SignUpDTO) => Promise<UserDTO>;
  getCurrentUser: () => Promise<UserDTO>;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    return data as UserDTO;
  }

  const userSignIn = async (userData: SignInDTO) => {
    const { data } = await singIn(userData);

    data?.status == 'error' && data;

    if(data.accessToken) localStorage.setItem('@Inter:Token', data.accessToken);

    return await getCurrentUser();
  }

  const userSignUp = async (userData: SignUpDTO) => {
    const { data } = await singUp(userData);
    localStorage.setItem('@Inter:Token', data.accessToken);
    return await getCurrentUser();
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
