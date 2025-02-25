import { configureStore } from '@reduxjs/toolkit';
import cart from './slice/cart';

const store = configureStore({
  reducer: { cart: cart },
});

console.log('oncreate store : ', store.getState());

store.subscribe(() => {
  console.log('STORE CHANGE : ', store.getState());
});

export default store;
