import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import { getAllProducts } from '../services/ProductService';
import { useLogin } from '../hooks/useAuth';

const CardProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  const handleAddToCart = (id) => {
    if (cart.find((product) => id === product.id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      if (!product) return acc;
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(total);
  }, [cart, products]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    const cartItem = JSON.parse(localStorage.getItem('cart'));
    if (cartItem) {
      setCart(cartItem);
    }
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
                  />
                  <Card.Body
                    description={product.description}
                    price={product.price}
                    onClick={() => handleAddToCart(product.id)}
                  />
                </Card>
              );
            })}
        </div>
        <div className='w-1/3 hidden md:block p-2 shadow-2xl'>
          {cart.length > 0 && (
            <Cart>
              {cart.map((item) => {
                const product = products.find(
                  (product) => item.id === product.id
                );
                if (!product) return null;
                return (
                  <Cart.Body
                    key={product.id}
                    name={product.title}
                    price={product.price}
                    qty={item.qty}
                    total={product.price * item.qty}
                  />
                );
              })}
              <Cart.Footer totalPrice={totalPrice} />
            </Cart>
          )}
        </div>
      </div>
    </>
  );
};

export default CardProductsPage;
