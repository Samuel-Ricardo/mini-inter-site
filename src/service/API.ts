import axios from 'axios';
import { config } from 'process';
import { api } from '../config/api';
import { STORAGE } from '../config/local_storage';

const {USER} = STORAGE;

const API = axios.create({baseURL: api.BASE_URL});

API.interceptors.request.use(config => {

    const token = localStorage.getItem(USER.TOKEN) || '';

    config.headers = api.AUTHORIZATION(token);
    return config;
  }
)

export {API}
