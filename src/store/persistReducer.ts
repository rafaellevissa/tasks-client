import type { Reducer } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export default (reducer: Reducer) => {
  const persistedReducer: Reducer = persistReducer(
    {
      key: "@todo",
      storage: storage,
      whitelist: ["auth"],
    },
    reducer
  );

  return persistedReducer;
};
