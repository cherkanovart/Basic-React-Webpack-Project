import { searchSlice } from '@/slices/search.slice';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    search: searchSlice.reducer
  }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
