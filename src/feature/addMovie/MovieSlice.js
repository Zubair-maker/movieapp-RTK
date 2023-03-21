import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedMovies: [],
  watchListMovies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovieToWatchList(state, action) {
      state.watchListMovies.push(action.payload);
    },
    addMovieToWatched(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchedMovies.push(action.payload);
    },
    removeMovieFromWatchList(state, action) {
      state.watchListMovies = state.watchListMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
    movieAddToWachList(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.id !== action.payload.id
      );
      state.watchListMovies.push(action.payload);
    },
    removeMovieFromWatched(state, action) {
      state.watchedMovies = state.watchedMovies.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

//creating selector
export const selectAllWatchListMovies = (state) => state.movies.watchListMovies;
export const selectAllWathedMovies = (state) => state.movies.watchedMovies;

export const {
  addMovieToWatchList,
  addMovieToWatched,
  removeMovieFromWatchList,
  movieAddToWachList,
  removeMovieFromWatched,
} = movieSlice.actions;
export default movieSlice.reducer;
