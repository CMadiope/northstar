import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;

      const duplicateItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (duplicateItem) {
        duplicateItem.quantity++;
        duplicateItem.totalPrice += newItem.price;
      } else {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
          image: newItem.image,
        });
        state.totalQuantity++;
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload)
      item.quantity
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find((item) => item.id === action.payload)
      if(item.quantity === 1) {
        item.quantity = 1
      } else {
        item.quantity--
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const duplicatedItem = state.cartItems.find((item) => item.id === id);
      if (duplicatedItem.quantity === 1) {
        state.cartItems = state.cartItems.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        duplicatedItem.quantity--;
        duplicatedItem.totalPrice -= duplicatedItem.price;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
