const Input = ({ id, required, label, placeholder, type }) => {
  return (
    <div className=''>
      <label htmlFor={id} className='font-bold text-sm md:text-base'>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className='w-full border border-gray-500 rounded p-2 outline-none opacity-80 text-sm md:text-base'
        required={required}
        id={id}
        name={id}
      />
    </div>
  );
};

export default Input;
