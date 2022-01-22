import { AxiosRequestHeaders } from 'axios';

export const USER_ROUTES = {
  SIGNIN: '/user/singin',
  SIGNUP: '/user/singnup',
  ME: '/user/me'
}

export const PIX_ROUTES = {
  REQUEST: '/pix/request',
  PAY: (key: string) => `/pix/pay/${key}`,
  TRANSACTIONS: '/transactions'
}

export const API_ROUTES = {
  USER: {...USER_ROUTES},
  PIX: {...PIX_ROUTES}
}

export const api = {
  API_ROUTES,
  BASE_URL: 'https://mini-inter-api.herokuapp.com',
  AUTHORIZATION: (token: string) => ({'Authorization': `Bearer ${token}`})
}
