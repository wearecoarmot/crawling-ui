import axios, { AxiosInstance } from 'axios';

const JWT_Token = localStorage.getItem('auth');

const apiCall: AxiosInstance = axios.create({
  headers: {
    'content-type': 'application/json',
    Authorization: JWT_Token ? `Bearer ${JWT_Token}` : null,
  },
  withCredentials: true,
});

export default apiCall;
