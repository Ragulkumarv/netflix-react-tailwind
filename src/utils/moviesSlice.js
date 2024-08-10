import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    topRatedMovies: null,
    popularMovies: null,
    nowPlayingMovies: null,
    upcomingMovies: null,
    movieTrailer: null,
    searchedMovie: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    removeNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = null;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    removePopularMovies: (state, action) => {
      state.popularMovies = null;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    removeTopRatedMovies: (state, action) => {
      state.topRatedMovies = null;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    removeUpcomingMovies: (state, action) => {
      state.upcomingMovies = null;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addSearchedMovie: (state, action) => {
      state.searchedMovie = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  removeNowPlayingMovies,
  addPopularMovies,
  removePopularMovies,
  addTopRatedMovies,
  removeTopRatedMovies,
  addMovieTrailer,
  addUpcomingMovies,
  removeUpcomingMovies,
  addSearchedMovie,
} = moviesSlice.actions;

export default moviesSlice.reducer;
