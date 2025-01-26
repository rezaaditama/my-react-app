import Card from '../components/Card';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Cart from '../components/Cart';

const data = [
  {
    id: 1,
    src: '/assets/image/shoes-1.jpg',
    name: 'Sepatu Kasual Modern',
    description:
      'Sepatu kasual yang nyaman dengan desain modern, cocok untuk kegiatan sehari-hari. Dibuat dari bahan berkualitas tinggi untuk durabilitas maksimal.',
    price: 350000,
  },
  {
    id: 2,
    src: '/assets/image/shoes-1.jpg',
    name: 'Sepatu Kulit Klasik',
    description:
      'Sepatu kulit bergaya klasik yang memberikan tampilan elegan dan profesional. Ideal untuk acara formal dan pertemuan bisnis.',
    price: 750000,
  },
  {
    id: 3,
    src: '/assets/image/shoes-1.jpg',
    name: 'Sneakers Sporty',
    description:
      'Sneakers sporty dengan bantalan nyaman dan desain trendi, sempurna untuk olahraga ringan dan gaya santai.',
    price: 550000,
  },
  {
    id: 4,
    src: '/assets/image/shoes-1.jpg',
    name: 'Sneakers Sporty',
    description:
      'Sneakers sporty dengan bantalan nyaman dan desain trendi, sempurna untuk olahraga ringan dan gaya santai.',
    price: 550000,
  },
  {
    id: 5,
    src: '/assets/image/shoes-1.jpg',
    name: 'Sneakers Sporty',
    description:
      'Sneakers sporty dengan bantalan nyaman dan desain trendi, sempurna untuk olahraga ringan dan gaya santai.',
    price: 550000,
  },
  {
    id: 6,
    src: '/assets/image/shoes-1.jpg',
    name: 'Sneakers Sporty',
    description:
      'Sneakers sporty dengan bantalan nyaman dan desain trendi, sempurna untuk olahraga ringan dan gaya santai.',
    price: 550000,
  },
];

const CardProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

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
    const total = cart.reduce((acc, item) => {
      const product = data.find((product) => product.id === item.id);
      return acc + product.price * item.qty;
    }, 0);
    setTotalPrice(total);
  }, [cart]);

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
          {data.map((product) => {
            return (
              <Card key={product.id} className={'md:w-1/3 w-1/2'}>
                <Card.Header
                  src={product.src}
                  alt={product.name}
                  name={product.name}
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
                const product = data.find((product) => item.id === product.id);
                return (
                  <Cart.Body
                    key={product.id}
                    name={product.name}
                    price={product.price.toLocaleString('id-ID')}
                    qty={item.qty}
                    total={(product.price * item.qty).toLocaleString('id-ID')}
                  />
                );
              })}
              <Cart.Footer>
                Rp. {totalPrice.toLocaleString('id-ID')}
              </Cart.Footer>
            </Cart>
          )}
        </div>
      </div>
    </>
  );
};

export default CardProductsPage;
