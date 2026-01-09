import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        searchedMovies: null,
        isLoading: true,          //yha se isLoading agar true hai to mtlb abhi tak movies ka data load ni hua hai
},
  reducers: {
    addNowPlayingMovies: (state, action) => {      //Ye actions hai jiski madad se hum dipatch krte hn actions ko
        state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
        state.trailerVideo = action.payload;
    },
    addPopularMovies: (state, action)=>{
        state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action)=>{
      state.topRatedMovies = action.payload;
    },
    addUpcomingMovies: (state, action)=> {
      state.upcomingMovies = action.payload;
      state.isLoading = false;               //jab upcoming movies ka data load ho jata hai to mtlb ab sabhi movies ka data load ho chuka hai
                                             //ek check pointer ki tarah hai ki saari movies ka data load ho chuka hai
    },
     addSearchedMovies: (state, action)=>{
      state.searchedMovies = action.payload;
    },
    resetSearchedMovies: (state) => {
             state.searchedMovies = null;
    },
  },  
}
);

export const { addNowPlayingMovies, resetSearchedMovies,  addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addSearchedMovies } = moviesSlice.actions;

export default moviesSlice.reducer;