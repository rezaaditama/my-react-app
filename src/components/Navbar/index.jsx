import React from 'react';
import Button from '../Button';

const Navbar = () => {
  const username = localStorage.getItem('username');
  const handleLogout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = '/';
  };
  return (
    <div className='w-full bg-blue-950 h-14 flex justify-end items-center px-5 space-x-2'>
      <h1 className='text-white font-bold'>{username}</h1>
      <Button className={'p-2'} type={'button'} onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
};

export default Navbar;
