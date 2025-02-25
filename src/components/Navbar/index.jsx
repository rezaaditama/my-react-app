import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLogin } from '../../hooks/useAuth';
import Button from '../Button';

const Navbar = () => {
  const username = useLogin();
  const [totalCart, setTotalCart] = useState(0);
  const cart = useSelector((state) => state.cart.data);

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };
  return (
    <div className='w-full bg-blue-950 h-14 flex justify-end items-center px-5 space-x-2'>
      <h1 className='text-white font-bold'>{username}</h1>
      <Button className={'p-2'} type={'button'} onClick={handleLogout}>
        Logout
      </Button>
      <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5 text-white'>
        {totalCart}
      </div>
    </div>
  );
};

export default Navbar;
