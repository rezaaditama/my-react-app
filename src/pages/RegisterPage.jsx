import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Input from '../components/Input';

const RegisterPage = () => {
  return (
    <div className='min-h-screen flex justify-center items-center'>
      <div className='w-2/3 shadow-2xl p-5 md:w-1/3'>
        <div className='mb-3'>
          <h1 className='text-blue-700 font-bold text-xl text-center'>
            Register
          </h1>
          <p className='text-sm text-center text-slate-700'>
            Welcome, please enter your details
          </p>
        </div>
        <form action='' className='space-y-3'>
          <Input
            label={'Fullname'}
            placeholder={'Enter your fullname'}
            required={true}
            id={'fullname'}
            type={'text'}
          />
          <Input
            label={'Email'}
            placeholder={'Enter your email'}
            required={true}
            id={'email'}
            type={'text'}
          />
          <Input
            label={'Username'}
            placeholder={'Enter your username'}
            required={true}
            id={'username'}
            type={'text'}
          />
          <Input
            label={'Password'}
            placeholder={'Enter your password'}
            required={true}
            id={'password'}
            type={'text'}
          />
          <Input
            label={'Verify Password'}
            placeholder={'Enter your passsword'}
            required={true}
            id={'verifyPassword'}
            type={'password'}
          />
          <Button className={'w-full py-2'} type={'submit'}>
            Submit
          </Button>
          <p className='text-base text-center'>
            have an account?{' '}
            <Link className={'font-bold text-blue-700'} to={'/'}>
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
