import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTotalPrice, useTotalPriceDispatch } from '../../context/TotalPrice';
import Cart from '../Cart';

const TableCart = ({ products }) => {
  const cart = useSelector((state) => state.cart.data);
  const dispatch = useTotalPriceDispatch();
  const { total } = useTotalPrice();

  useEffect(() => {
    const total = cart.reduce((acc, item) => {
      const product = products.find((product) => product.id === item.id);
      if (!product) return acc;
      return acc + product.price * item.qty;
    }, 0);
    dispatch({
      type: 'UPDATE',
      payload: {
        total: total,
      },
    });
  }, [cart, products]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
  }, [cart]);

  return (
    <Cart>
      {cart.map((item) => {
        const product = products.find((product) => item.id === product.id);
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
      <Cart.Footer totalPrice={total} />
    </Cart>
  );
};

export default TableCart;
