import { createReducer } from '@reduxjs/toolkit'
import { loadQuest, setQuestErrorStatus, setQuestLoadedStatus } from 'store/actions'


const initState = {
  quest: null,
  isQuestLoaded: false,
  error: false,
};

export const quesReducer = createReducer(initState, (builder) => {
  builder
    .addCase(loadQuest, (state, action) => {
      state.quest = action.payload;
      state.isQuestLoaded = true;
    })
    .addCase(setQuestLoadedStatus, (state, action) => {state.isQuestLoaded = action.payload;})
    .addCase(setQuestErrorStatus, (state, action) => {state.error = action.payload;});
})
