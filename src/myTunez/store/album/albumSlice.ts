import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  albums: [],
  songs: [],
};

const albumSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    setAlbums: (state, action) => {
      state.albums = action.payload;
    },
  },
});

export const { setAlbums } = albumSlice.actions;
export default albumSlice.reducer;
