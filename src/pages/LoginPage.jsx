import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';
import { DarkMode } from '../context/DarkMode';
import { login } from '../services/AuthService';

const LoginPage = () => {
  const [loginFailed, setLoginFailed] = useState('');
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = {
      username: e.target.username.value,
      password: e.target.password.value,
    };

    const response = await login(data);
    if (response.status) {
      localStorage.setItem('token', response.token);
      window.location.href = '/products';
    } else {
      setLoginFailed(response.error);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className={`min-h-screen flex justify-center items-center ${
        isDarkMode && 'bg-slate-900 text-white'
      }`}
    >
      <div
        className={`w-2/3 shadow-2xl p-5 md:w-1/3 ${
          isDarkMode && 'bg-slate-800 rounded-md'
        }`}
      >
        <div className='mb-3'>
          <h1 className='text-blue-700 font-bold text-xl text-center'>Login</h1>
          <p
            className={`text-sm text-center text-slate-700 ${
              isDarkMode && 'text-white'
            }`}
          >
            Welcome, please enter your details
          </p>
        </div>
        <form onSubmit={handleLogin} className='space-y-3'>
          <Input
            label={'Username'}
            placeholder={'Enter your username'}
            required={true}
            id={'username'}
            type={'text'}
            ref={inputRef}
          />
          <Input
            label={'Password'}
            placeholder={'Enter your passsword'}
            required={true}
            id={'password'}
            type={'password'}
          />
          <Button className={'w-full py-2'} type={'submit'}>
            Submit
          </Button>
          {loginFailed && (
            <p className='text-center text-red-600'>{loginFailed}</p>
          )}
          <p className='text-base text-center'>
            Don't have an account?{' '}
            <Link className={'font-bold text-blue-700'} to={'/register'}>
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
