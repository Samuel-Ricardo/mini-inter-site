import { statement } from '@Types/models';
import { PIX_ROUTES } from '../../config/api'
import {API} from '../API'

const {PAY, REQUEST, TRANSACTIONS} = PIX_ROUTES;

export const request = (value: number) => API.post(REQUEST, { value });
export const pay = (key: string) => API.post(PAY(key));
export const transactions = () => API.get<{
  transactions: statement[]
}>(TRANSACTIONS);
