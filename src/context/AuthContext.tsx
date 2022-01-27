import React, { createContext, useState } from 'react';

import {AxiosResponse} from 'axios'

//import { ContextData } from '@Types/context';
import { UserDTO } from '@Types/DTO';
import { SignInDTO, SignUpDTO } from '@Types/DTO';

import {me, singIn, singUp}  from '../service/resources/user';
import { ContextData } from '../@types/context/ContextData';
import { STORAGE } from '../config/local_storage';

const INITIAL_STATE: ContextData = {

  getCurrentUser: ():any => {},
  user: {
    id: '',
    accountDigit: 0,
    accountNumber: 0,
    email: '',
    firstName: '',
    lastName: '',
    wallet: 0,
  },
  userSignIn: ():any => {},
  userSignUp: ():any => {}

};

export const AuthContext = createContext<ContextData>(INITIAL_STATE);

export const AuthProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserDTO>(() => {
    const user = localStorage.getItem(STORAGE.USER.TOKEN);

    if (user) return JSON.parse(user);

      return {};
  });

  const getCurrentUser = async () => {
    const { data } = await me();
    await setUser(data);
    localStorage.setItem(STORAGE.USER.DATA, JSON.stringify(data));
    return data;
  }

  const userSignIn = async (userData: SignInDTO) => {
    const { data } = await singIn(userData);

    data?.status == 'error' && data;

    if(data.access_token) await localStorage.setItem(STORAGE.USER.TOKEN, data.access_token);

    return await getCurrentUser();
  }

  const userSignUp = async (userData: SignUpDTO) => {
    const { data } = await singUp(userData);
    await localStorage.setItem(STORAGE.USER.TOKEN, data.accessToken);
    return await getCurrentUser();
  }

  return (
    <AuthContext.Provider value={{user, userSignIn, userSignUp, getCurrentUser}}>
      {children}
    </AuthContext.Provider>
  )
}
