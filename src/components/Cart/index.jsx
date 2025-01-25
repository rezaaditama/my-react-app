const Cart = ({ children }) => {
  return (
    <table className='w-full'>
      <thead>
        <tr>
          <th className='text-center border-b border-black' colSpan={'4'}>
            CART ORDER
          </th>
        </tr>
        <tr className='border-b border-black'>
          <th className='w-2/7'>Name</th>
          <th className='w-2/7'>Price</th>
          <th className='w-1/7'>Qty</th>
          <th className='w-2/7'>Total</th>
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

const Body = ({ name, price, qty, total }) => {
  return (
    <tr className='border-b border-black'>
      <td className='px-1 text-start line-clamp-1'>{name}</td>
      <td className='text-center'>Rp. {price}</td>
      <td className='text-center'>{qty}</td>
      <td className='text-end'>Rp. {total}</td>
    </tr>
  );
};

const Footer = () => {
  return <tfoot>Tota</tfoot>;
};

Cart.Body = Body;
Cart.Footer = Footer;

export default Cart;
