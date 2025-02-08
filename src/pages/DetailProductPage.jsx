import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { getProductById } from '../services/ProductService';

const DetailProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  return (
    <>
      <div className='min-h-screen'>
        <Navbar />
        <Card
          className={'flex justify-center mt-10 pb-8 space-x-14 items-center'}
        >
          <div className='h-[75vh] w-1/2 shadow-2xl'>
            <Card.Header
              className={'h-[75vh]'}
              src={product.image}
              alt={product.title}
              id={product.id}
            />
          </div>
          <div className='w-1/3 shadow-2xl p-5'>
            <div className=''>
              <h1 className='text-center font-bold'>{product.title}</h1>
            </div>
            <Card.Body
              price={product.price?.toLocaleString('en-US') ?? 'Loading...'}
              description={product.description}
            />
          </div>
        </Card>
      </div>
    </>
  );
};

export default DetailProductPage;
