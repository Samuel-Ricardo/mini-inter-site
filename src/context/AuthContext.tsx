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

export const AuthContext = createContext<ContextData>({});

