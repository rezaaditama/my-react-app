import { useEffect, useState } from 'react';
import { getDataUser } from '../services/AuthService';

export const useLogin = () => {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    const dataUser = localStorage.getItem('token');
    setDataUser(getDataUser(dataUser));
  }, []);

  useEffect(() => {
    const dataUser = localStorage.getItem('token');
    if (!dataUser) {
      window.location.href = '/';
    }
  }, []);
  return dataUser;
};
