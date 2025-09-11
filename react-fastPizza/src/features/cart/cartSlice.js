import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  // cart: [
  //   {
  //     pizzaID: 12,
  //     name: "eastern",
  //     quantity: 2,
  //     price: 13,
  //     totalPrice: 32,
  //   },
  // ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    DecreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.price;
      if (item.quantity === 0)
        cartSlice.caseReducers(deleteItem(action, action));
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  DecreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

// for production applications use the reselect lib to optimize the performance
export const getCartTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCart = (state) => state.cart.cart;
export const getUserName = (state) => state.user.username;
export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
