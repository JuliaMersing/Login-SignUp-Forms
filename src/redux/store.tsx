import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    //Reducer will be here
  },
});

export type RootState = ReturnType<typeof store.getState>;
