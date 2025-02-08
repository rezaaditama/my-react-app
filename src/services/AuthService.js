import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const login = async (data) => {
  try {
    const res = await axios.post('https://fakestoreapi.com/auth/login', data);
    return { status: true, token: res.data.token };
  } catch (error) {
    return { status: false, error: error.response.data };
  }
};

export const getDataUser = (token) => {
  const decoded = jwtDecode(token);
  return decoded.user;
};
