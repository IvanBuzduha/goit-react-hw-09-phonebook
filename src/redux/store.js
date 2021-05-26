import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  contactsReducer,
  errorReducer,
  filterReducer,
  loaderReducer,
} from "./phonebook/phonebookReducer";
import authReducer from "./auth/authReducers";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};
const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  error: errorReducer,
  isLoading: loaderReducer,
  auth: persistReducer(persistConfig, authReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
});
persistStore(store);
export default store;
