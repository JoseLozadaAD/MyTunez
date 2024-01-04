import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isPlaying: false,
  song: {
    id: 0,
    title: '',
    artistName: '',
    albumId: -1,
    albumTitle: '',
    cover: '',
    audioSrc: null,
    duration: '',
    currentTime: 0,
  },
  volume: 100,
  currentAlbum: {},
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
    setCurrentTime: (state, action) => {
      state.song.currentTime = action.payload;
    },
    setCurrentAlbum: (state, action) => {
      state.currentAlbum = action.payload;
    },
  },
});

export const {
  setPlay,
  setPause,
  setSong,
  setVolume,
  setCurrentTime,
  setCurrentAlbum,
} = playerSlice.actions;
export default playerSlice.reducer;
