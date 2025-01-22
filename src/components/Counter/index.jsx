import { useState } from 'react';
import Button from '../Button';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className='flex space-x-2 bg-red-900'>
      <Button className={'px-2'} onClick={handleDecrement}>
        -
      </Button>
      <p>{counter}</p>
      <Button className={'px-2'} onClick={handleIncrement}>
        +
      </Button>
    </div>
  );
};

export default Counter;
