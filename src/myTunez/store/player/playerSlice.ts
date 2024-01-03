import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  song: {
    id: 0,
    title: '',
    artistName: '',
    albumTitle: '',
    cover: '',
    audioSrc: null,
  },
  volume: 100,
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlay: (state) => {
      state.isPlaying = true;
    },
    setPause: (state) => {
      state.isPlaying = false;
    },
    setSong: (state, action) => {
      state.song = action.payload;
    },
    setVolume: (state, action) => {
      state.volume = action.payload;
    },
  },
});

export const { setPlay, setPause, setSong, setVolume } = playerSlice.actions;
export default playerSlice.reducer;
