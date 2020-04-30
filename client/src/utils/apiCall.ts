import axios, { AxiosInstance } from 'axios';

const apiCall: AxiosInstance = axios.create({
  headers: { 'content-type': 'application/json' },
  withCredentials: true,
});

export default apiCall;
