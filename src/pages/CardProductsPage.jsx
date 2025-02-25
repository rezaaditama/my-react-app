import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import { getAllProducts } from '../services/ProductService';
import { useLogin } from '../hooks/useAuth';
import TableCart from '../components/TableCart';

const CardProductsPage = () => {
  const [products, setProducts] = useState([]);
  useLogin();

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Navbar />
      <div className='flex'>
        <div className='flex flex-wrap md:w-2/3 p-2 box-border'>
          {products.length > 0 &&
            products.map((product) => {
              return (
                <Card key={product.id} className={'md:w-1/3 w-1/2'}>
                  <Card.Header
                    src={product.image}
                    alt={product.title}
                    name={product.title}
                    id={product.id}
                    className={'h-36 md:h-52'}
                  />
                  <Card.Body
                    description={product.description}
                    price={product.price.toLocaleString('en-US')}
                    id={product.id}
                  />
                </Card>
              );
            })}
        </div>
        <div className='w-1/3 hidden md:block p-2 shadow-2xl'>
          <TableCart products={products} />
        </div>
      </div>
    </>
  );
};

export default CardProductsPage;
