import React, { createContext, useState } from 'react';

import {AxiosResponse} from 'axios'

import { UserDTO } from '@Type/DTO';
import { SignInDTO, SignUpDTO } from '@Types/DTO';

import {me, singIn, singUp}  from '../service/resources/user';

interface ContextData {
  user: UserDTO,
  userSignIn: (userData: SignInDTO) => Promise<UserDTO>;
  userSignUp: (userData: SignUpDTO) => Promise<UserDTO>;
  getCurrentUser: () => Promise<AxiosResponse<UserDTO,any>>;
}

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserDTO>({} as UserDTO);

  const getCurrentUser = async () => {
    const { data } = await me();
    setUser(data);
    return data;
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
