import axios from 'axios'


const BASE_URL = 'http://localhost:3001';


export const createApi = () => {
  const api = axios.create({baseURL: BASE_URL})
  return api;
}
