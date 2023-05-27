import axios from 'axios';

export interface LoginData {
  username: string;
  password: string;
  code: string;
  uuid: string;
}
export interface LoginRes {
  code: number;
  msg: string;
  token: string;
}
export function login(data: LoginData) {
  return axios.post<LoginRes>('/login', data);
}

export function logout() {
  return axios.post('/logout');
}

export interface GetInfoRes {
  code: number;
  msg: string;
  permissions: string[];
  roles: string[];
  user: { [key: string]: any };
}
export function getInfo() {
  return axios.get<GetInfoRes>('/getInfo');
}

export interface CodeImgRes {
  code: number;
  msg: string;
  captchaEnabled: boolean;
  uuid: string;
  img: string;
}
export function captchaImage() {
  return axios.get<CodeImgRes>('/captchaImage');
}
