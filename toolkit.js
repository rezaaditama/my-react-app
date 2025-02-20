import { configureStore, createAction, createReducer } from '@reduxjs/toolkit';

const addToCart = createAction('ADD_TO_CART');
const sessionLogin = createAction('SESSION_LOGIN');

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({ status: false }, (builder) => {
  builder.addCase(sessionLogin, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

console.log('oncreate store : ', store.getState());

store.subscribe(() => {
  console.log('STORE CHANGE : ', store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 10 }));
store.dispatch(sessionLogin());
