import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topRatedMovies: {},
  },
  reducers: {
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeTopRatedMovies: (state, action) => {
      state.topRatedMovies = {};
    },
  },
});

export const { addTopRatedMovies, removeTopRatedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;
