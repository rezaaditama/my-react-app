import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const LoginPage = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('username', e.target.username.value);
    localStorage.setItem('password', e.target.password.value);
    window.location.href = '/products';
  };
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-2/3 shadow-2xl p-5 md:w-1/3'>
        <div className='mb-3'>
          <h1 className='text-blue-700 font-bold text-xl text-center'>Login</h1>
          <p className='text-sm text-center text-slate-700'>
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
