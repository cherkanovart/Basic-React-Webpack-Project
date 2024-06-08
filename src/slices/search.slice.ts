import { api } from '@/shared/api';
import { PageContentType, Pages } from '@/shared/types';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type SearchStateType = {
  data: PageContentType;
  activeTab: Pages | null;
  isLoading: boolean;
};

export const searchPageById = createAsyncThunk('users/fetchByIdStatus', async (page: Pages) => {
  const response = await api.search(page);

  return response.data;
});

const initialState: SearchStateType = {
  data: { drinks: [] },
  activeTab: null,
  isLoading: true
};

export const searchSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    activeTabSet: (state, action: PayloadAction<Pages | null>) => {
      state.activeTab = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchPageById.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(searchPageById.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
  }
});

export const { activeTabSet } = searchSlice.actions;
