import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    data: JSON.parse(localStorage.getItem('cart') || []),
  },
  reducers: {
    addToCart: (state, action) => {
      const cartData = state.data.find((item) => item.id === action.payload.id);
      if (cartData) {
        cartData.qty++;
      } else {
        state.data.push(action.payload);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
