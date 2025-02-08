import { Link } from 'react-router-dom';
import Button from '../Button';

const Card = ({ children, className }) => {
  return <div className={`${className} shadow-xl p-2 rounded`}>{children}</div>;
};

const Head = ({ className, src, alt, name, id }) => {
  return (
    <div className={`space-y-2`}>
      <Link to={`/product/${id}`}>
        <img
          src={src}
          alt={alt}
          className={`${className} p-2 rounded-t-lg w-full object-contain`}
        />
        <h1 className='text-center font-bold text-lg line-clamp-1'>{name}</h1>
      </Link>
    </div>
  );
};

const Body = ({ className, description, price, onClick }) => {
  return (
    <div
      className={`${className} p-2 space-y-1 flex justify-between flex-col min-h-32`}
    >
      <p className='line-clamp-2 text-base'>{description}</p>
      <p className='text-center text-sm font-bold'>$ {price}</p>
      <Button className={'w-full py-1'} type={'submit'} onClick={onClick}>
        Add to Cart
      </Button>
    </div>
  );
};

Card.Header = Head;
Card.Body = Body;

export default Card;
