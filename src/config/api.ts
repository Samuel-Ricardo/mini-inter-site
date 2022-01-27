import { AxiosRequestHeaders } from 'axios';

export const USER_ROUTES = {
  SIGNIN: '/user/signin',
  SIGNUP: '/user/signup',
  ME: '/user/me'
}

export const PIX_ROUTES = {
  REQUEST: '/pix/request',
  PAY: (key: string) => `/pix/pay/${key}`,
  TRANSACTIONS: '/pix/transactions'
}

export const API_ROUTES = {
  USER: {...USER_ROUTES},
  PIX: {...PIX_ROUTES}
}

export const api = {
  API_ROUTES,
  BASE_URL: 'https://mini-inter-api.herokuapp.com',
  BASE_URL_DEVELOPMENT: 'http://localhost:3333',
  AUTHORIZATION: (token: string) => ({'Authorization': `Bearer ${token}`})
}
