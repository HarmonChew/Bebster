import { createSlice } from "@reduxjs/toolkit";

const initialStateSetup = {
  products: [],
  quantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: { ...initialStateSetup },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity;
      state.products.push(action.payload);
      state.totalPrice += action.payload.price * action.payload.quantity;
    },
    clearCart: () => {
      return initialStateSetup;
    },
    removeProduct: (state, action) => {
      state.quantity -= action.payload.quantity;
      state.totalPrice -= action.payload.price * action.payload.quantity;
      state.products = state.products.filter(
        (product) => product._id !== action.payload.id
      );
    },
  },
});

export default cartSlice.reducer;
export const { addProduct, clearCart, removeProduct } = cartSlice.actions;
