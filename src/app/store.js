import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "../services/movieApi";
import moviesReducer from '../feature/addMovie/MovieSlice'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";


//After refreshing the page the data inside store becomes empty,so to prevent 
//this issue here use redux-persist.

const persistConfig = {
  key: 'root',
  verison: 1,
  storage
};

const reducer = combineReducers({
  [movieApi.reducerPath]: movieApi.reducer,
    movies: moviesReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  // reducer: {
  //   [movieApi.reducerPath]: movieApi.reducer,
  //   movies: moviesReducer,
  // },
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false
    }).concat(movieApi.middleware),
});
