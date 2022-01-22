import React, { createContext } from 'react';

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

export const AuthProvider:React.FC = ({children}) => {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}
