// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { User, CartItem } from "models";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { cartReducer, userReducer } from "./slices";

const persistConfig = {
  key: "root",
  storage,
};

export interface AppStore {
  user: User;
  cart: CartItem;
}

const persistedReducer = {
  // user: userReducer, /* sin persist */
  user: persistReducer(persistConfig, userReducer),
  cart: persistReducer(persistConfig, cartReducer),
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
