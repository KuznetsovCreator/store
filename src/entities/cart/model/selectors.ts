import {createSelector} from "@reduxjs/toolkit";
import {ICartItem} from "./types.ts";

const selectBase = createSelector(
  (state: RootState) => state,
  (state) => state.cart
)
export const selectCart = createSelector(
  selectBase,
  (state: {cart: ICartItem[]}) => state.cart
)