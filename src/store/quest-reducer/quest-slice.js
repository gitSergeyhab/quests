import { createSlice } from '@reduxjs/toolkit';
import { fetchOneQuest } from 'store/api-actions';


const initialState = {
  quest: null,
  loading: false,
  error: false,
};


export const questSlice = createSlice({
  name: 'quest',
  initialState,
  reducers: {
    setQuestLoading(state, action) {state.loading = action.payload;},
  },
  extraReducers: {
    [fetchOneQuest.fulfilled]: (state, action) => {
      state.quest = action.payload;
      state.loading = false;
      state.error = false;
    },
    [fetchOneQuest.pending]: (state) => {
      state.loading = true;
      state.error = false;
    },
    [fetchOneQuest.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  }
})

export const {setQuestLoading} = questSlice.actions;
