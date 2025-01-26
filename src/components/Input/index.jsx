import { forwardRef } from 'react';

const Input = forwardRef(({ id, required, label, placeholder, type }, ref) => {
  return (
    <div>
      <label htmlFor={id} className='font-bold text-sm md:text-base'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full border border-gray-500 rounded p-2 outline-1 outline-slate-600 opacity-80 text-sm md:text-base'
        required={required}
        id={id}
        name={id}
        ref={ref}
      />
    </div>
  );
});

export default Input;
