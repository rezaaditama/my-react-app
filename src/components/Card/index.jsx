import Button from '../Button';

const Card = ({ children }) => {
  return (
    <div className='shadow-xl p-2 h-1/3 rounded md:w-1/5 w-1/2'>{children}</div>
  );
};

const Head = ({ src, alt, title }) => {
  return (
    <div className='space-y-2'>
      <img src={src} alt={alt} className='w-full rounded-t-lg' />
      <h1 className='text-center font-bold text-lg line-clamp-1'>{title}</h1>
    </div>
  );
};

const Body = ({ description, price }) => {
  return (
    <div className='p-2 space-y-1 flex justify-between flex-col min-h-32'>
      <p className='line-clamp-2 text-base'>{description}</p>
      <p className='text-center text-sm'>Rp. {price.toLocaleString('id-ID')}</p>
      <Button className={'w-full py-1'} type={'submit'}>
        Add to Cart
      </Button>
    </div>
  );
};

Card.Header = Head;
Card.Body = Body;

export default Card;
