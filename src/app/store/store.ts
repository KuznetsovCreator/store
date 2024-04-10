import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {persistReducer, persistStore} from 'redux-persist'
import {FLUSH, PERSIST, PURGE, REHYDRATE} from "redux-persist/es/constants";
import {productApi} from "../../entities/product";
import {dealerApi} from "../../entities/dealer";
import {cartReducer} from "../../entities/cart";
import {optionsReducer} from "../../entities/options";

export const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
  cart: cartReducer,
  options: optionsReducer
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}
const pReducer = persistReducer(persistConfig, rootReducer)

export const setupStore = () => {
  return configureStore({
    reducer: pReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PERSIST, PURGE]
        }
      }).concat(productApi.middleware, dealerApi.middleware)
  })
}

export const store = setupStore()
export const persistor = persistStore(store)