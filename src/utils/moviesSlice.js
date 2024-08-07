import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topRatedMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeTopRatedMovies: (state, action) => {
      state.topRatedMovies = {};
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export const { addTopRatedMovies, removeTopRatedMovies, addMovieTrailer } =
  moviesSlice.actions;

export default moviesSlice.reducer;
