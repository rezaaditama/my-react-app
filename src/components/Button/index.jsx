const Button = ({ className, children, type, onClick }) => {
  return (
    <div className=''>
      <button
        className={`${className} bg-blue-700 text-white font-bold rounded-md text-sm md:text-base`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
