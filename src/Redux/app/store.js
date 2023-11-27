import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";
import { createLogger } from "redux-logger"; // defaults to localStorage
import visaSlice from "../features/visaSlice";
import { encryptTransform } from "../Encrypt/EncryptionTransform";
import hajjSlice from "../features/hajjSlice";
import umrahSlice from "../features/umrahSlice";
import hotelSlice from "../features/hotelSlice";
import toursSlice from "../features/toursSlice";
import busSlice from "../features/busSlice";
import trainSlice from "../features/trainSlice";

const middlewares = [];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
  });

  middlewares.push(logger);
}

const rootReducer = combineReducers({
  visa: visaSlice,
  hajj: hajjSlice,
  umrah: umrahSlice,
  hotel: hotelSlice,
  tours: toursSlice,
  bus: busSlice,
  train: trainSlice
});

const persistConfig = {
  key: "root",
  storage,
  transforms: [encryptTransform],
  whitelist: ["visa", "hajj","umrah","hotel","tours","bus","train"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middlewares),
  devTools: true,
});

export const persistor = persistStore(store);
