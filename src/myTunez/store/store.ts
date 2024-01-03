import { configureStore } from '@reduxjs/toolkit';

import albumSlice from './album/albumSlice';

export const store = configureStore({
  reducer: {
    albums: albumSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
