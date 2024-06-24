import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from './constants';
import Cookies from "js-cookie"
import MockAdapter from "axios-mock-adapter";

export const http = axios.create({
  baseURL: API_URL,
})

export const mockHttp = new MockAdapter(http)



http.interceptors.request.use(async (request) => {
  request.headers.Authorization = `Bearer ${await getToken()}`
  return request;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

http.interceptors.response.use(
  // async (response) => {
  //   if(response.request.url.toString().contains('/auth')){
  //     await handleSetToken(response)
  //   }
  //   return response
  // },
  // (err) => {
  //   const shouldLogout = err.response && err.response.status === 401
  //   if (shouldLogout) {
  //    //TODO redirect to auth
  //   }
  //
  //   throw err
  // },
)
const setToken = async (accessToken) => {
  Cookies.set('accessToken', accessToken );
}
export const getToken =  async () => {
  return Cookies.get('accessToken') || '';

}
export const removeToken = async () => {
  Cookies.remove('accessToken');
}


export const handleHttpResponse = (response) => {
  return { status: 'success', body: response.data }
}

export const handleHttpError = (error) => {
  const code = error?.code

  return { status: 'error', message: error?.message, code }
}

export const resetApiProvider = () => mockHttp.restore()

const handleSetToken = async (response) => {
   await setToken(response.data.accessToken)
}