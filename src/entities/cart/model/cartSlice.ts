import {ICartItem} from "./types.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: { cart: ICartItem[] } = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = []
    },
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      const findItemIndex = state.cart?.findIndex((item) => item.id === action.payload.id)
      if (findItemIndex !== -1) {
        state.cart[findItemIndex].quantity += action.payload.quantity;
      } else {
        state.cart = [action.payload, ...state.cart];
      }
    },
    deleteItemFromCart: (state, action: PayloadAction<{id: string}>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    changeCountOfItemsInCart: (state, action: PayloadAction<{id: string, quantity: number}>) => {
      const findItemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
      if (findItemIndex >= 0) {
        state.cart[findItemIndex].quantity = action.payload.quantity;
      }
    }
  }
})

export const {
  clearCart,
  addItemToCart,
  deleteItemFromCart,
  changeCountOfItemsInCart
} = cartSlice.actions
export default cartSlice.reducer