import { useEffect, useState } from 'react';
import { getDataUser } from '../../services/AuthService';
import Button from '../Button';

const Navbar = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    const dataUser = localStorage.getItem('token');
    setDataUser(getDataUser(dataUser));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div className='w-full bg-blue-950 h-14 flex justify-end items-center px-5 space-x-2'>
      <h1 className='text-white font-bold'>{dataUser}</h1>
      <Button className={'p-2'} type={'button'} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
