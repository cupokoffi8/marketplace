import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'; 

const persistConfig = {
  key: 'root', 
  version: 1, 
  storage,
}

const persistedReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
  reducer: {
    cart: persistedReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER  ]
        }, 
    }), 
})

export const persistor = persistStore(store)