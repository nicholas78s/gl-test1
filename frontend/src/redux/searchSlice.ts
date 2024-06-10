
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ISearch } from '../models/Search';
import { RootState } from './store';

const initialState = {
  searchTerm: '',
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<ISearch>) => {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
})

export const { setSearch } = searchSlice.actions;

export const selectSearch = (state: RootState) => state.searchTerm;

export default searchSlice.reducer;