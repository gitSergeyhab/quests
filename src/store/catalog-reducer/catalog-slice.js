import { createSlice } from '@reduxjs/toolkit';
import { Genre } from 'const';
import { fetchQuests } from 'store/api-actions';
import { filterQuests } from 'utils/utils';


const initialState = {
  quests: [],
  genre: Genre.All.Server,
  displayQuests: [],
  loading: false,
  error: false,
};


export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setGenre(state, action) {state.genre = action.payload;},
    setDisplayQuests(state) {state.displayQuests = filterQuests(state.quests, state.genre);},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuests.fulfilled, (state, action) => {
        state.quests = action.payload;
        state.displayQuests =  filterQuests(action.payload, state.genre);
        state.loading = false;
        state.error = false;
      })
      .addCase(fetchQuests.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(fetchQuests.rejected, (state) => {
        state.loading = false;
        state.error = true;
      })
  }
});

export const {setGenre, setDisplayQuests} = catalogSlice.actions;
