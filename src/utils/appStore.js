import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import nowPlayingReducer from './nowPlayingSlice';

const appStore = configureStore({
    reducer: {
        user: userReducer,
        nowPlaying: nowPlayingReducer,
    },
});

export default appStore;
