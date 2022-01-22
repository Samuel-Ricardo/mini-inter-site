import axios from 'axios';
import { api } from '../config/api';

export const API = axios.create({
  baseURL: api.BASE_URL
});
