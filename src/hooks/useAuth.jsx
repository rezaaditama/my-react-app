import { useEffect } from 'react';

export const useLogin = () => {
  useEffect(() => {
    const dataUser = localStorage.getItem('token');
    if (!dataUser) {
      window.location.href = '/';
    }
  }, []);
};
