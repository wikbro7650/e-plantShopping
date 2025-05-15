import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const selectedItem = action.payload;
      
      const cartItem = state.items.find((item) => item.name === selectedItem.name);

      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.items.push({...selectedItem, quantity: 1});
      }

    },
    removeItem: (state, action) => {
      const { name } = action.payload;

      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {

      const {name, quantity} = action.payload;

      const itemToUpdate = state.items.find((item) => item.name === name); 

      if (quantity > 0) {
        itemToUpdate.quantity = quantity;
      } else {
        state.items = state.items.filter(item => item.name !== name);
      }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
