import axios, { AxiosResponse } from 'axios';
import { RestaurantsType } from '../types/restaurant';
import { UserType } from '../types/user';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfCookieName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const instance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) => instance.post(url, body).then(responseBody),
  put: (url: string, body: []) => instance.put(url, body).then(responseBody),
  delete: (url: string) => instance.delete(url).then(responseBody),
};

export const api = {
  login: (url: string, body: object): Promise<UserType> => requests.post(url, body),
  logout: (url: string): Promise<void> => requests.post(url, {}),
  getRestaurants: (url: string): Promise<RestaurantsType[]> => requests.get(url),
  getRestaurantDetail: (url: string): Promise<RestaurantsType> => requests.get(url),
};
