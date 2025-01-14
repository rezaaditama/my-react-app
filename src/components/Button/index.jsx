const Button = ({ className, children }) => {
  return (
    <div className=''>
      <button
        className={`${className} bg-blue-700 w-24 text-white font-bold rounded-md py-2 text-sm md:text-base`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
