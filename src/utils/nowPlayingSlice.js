import { createSlice } from "@reduxjs/toolkit";

const nowPlayingSlice = createSlice({
    name: "nowPlaying",
    initialState: {
        nowPlaying: null,
        videoTrailers: null,
        popular: null, // Change to hold multiple trailers
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlaying = action.payload;
        },
        addPopular: (state, action) => {
            state.popular = action.payload; // This should work
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload;
        },
        addVideoTrailers: (state, action) => { // Changed to handle multiple trailers
            state.videoTrailers = action.payload;
        },
    },
});

export default nowPlayingSlice.reducer;
export const { addNowPlaying, addVideoTrailers , addPopular  , addTopRated} = nowPlayingSlice.actions;
