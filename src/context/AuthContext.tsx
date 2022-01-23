import React, { createContext, useState } from 'react';

import {AxiosResponse} from 'axios'

//import { ContextData } from '@Types/context';
import { UserDTO } from '@Types/DTO';
import { SignInDTO, SignUpDTO } from '@Types/DTO';

import {me, singIn, singUp}  from '../service/resources/user';
import { ContextData } from '../@types/context/ContextData';
import { STORAGE } from '../config/local_storage';

export const AuthContext = createContext<ContextData>({} as ContextData);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserDTO>(() => {
    const user = localStorage.getItem(STORAGE.USER.TOKEN);

    if (user) return JSON.parse(user);

      return {} as UserDTO;
  });

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
