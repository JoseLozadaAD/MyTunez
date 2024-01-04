import { configureStore } from '@reduxjs/toolkit';

import albumSlice from './album/albumSlice';
import playerSlice from './player/playerSlice';
import themeSlice from './theme/themeSlice';

export const store = configureStore({
  reducer: {
    albums: albumSlice,
    player: playerSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
