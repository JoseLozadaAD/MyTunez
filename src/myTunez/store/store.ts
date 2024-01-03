import { configureStore } from '@reduxjs/toolkit';

import albumSlice from './album/albumSlice';
import playerSlice from './player/playerSlice';

export const store = configureStore({
  reducer: {
    albums: albumSlice,
    player: playerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
