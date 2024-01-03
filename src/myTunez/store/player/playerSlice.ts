import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  audioSrc: null,
  artist: {
    name: '',
    cover: '',
    title: '',
    album: '',
  },
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
    setAudioSrc: (state, action) => {
      state.audioSrc = action.payload;
    },
  },
});

export const { setPlay, setPause, setAudioSrc } = playerSlice.actions;
export default playerSlice.reducer;
