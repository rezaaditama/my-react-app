import Button from '../Button';

const Card = ({ children, className }) => {
  return <div className={`${className} shadow-xl p-2 rounded`}>{children}</div>;
};

const Head = ({ src, alt, name }) => {
  return (
    <div className='space-y-2'>
      <img src={src} alt={alt} className='w-full rounded-t-lg' />
      <h1 className='text-center font-bold text-lg line-clamp-1'>{name}</h1>
    </div>
  );
};

const Body = ({ description, price, onClick }) => {
  return (
    <div className='p-2 space-y-1 flex justify-between flex-col min-h-32'>
      <p className='line-clamp-2 text-base'>{description}</p>
      <p className='text-center text-sm font-bold'>
        Rp. {price.toLocaleString('id-ID')}
      </p>
      <Button className={'w-full py-1'} type={'submit'} onClick={onClick}>
        Add to Cart
      </Button>
    </div>
  );
};

Card.Header = Head;
Card.Body = Body;

export default Card;
