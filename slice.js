import { configureStore, createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      state.push(action.payload);
    },
    removeCart(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

console.log('oncreate store : ', store.getState());

store.subscribe(() => {
  console.log('STORE CHANGE : ', store.getState());
});

store.dispatch(cartSlice.actions.addToCart({ id: 1, qty: 190 }));
store.dispatch(cartSlice.actions.addToCart({ id: 19, qty: 34 }));
store.dispatch(cartSlice.actions.removeCart(1));
