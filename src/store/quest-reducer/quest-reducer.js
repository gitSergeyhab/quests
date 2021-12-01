import {createReducer} from '@reduxjs/toolkit'
import { loadQuest } from 'store/actions'


const initState = {
  quest: null,
  isQuestLoaded: false,
}

export const quesReducer = createReducer(initState, (builder) => {
  builder.addCase(loadQuest, (state, action) => {
    state.quest = action.payload;
    state.isQuestLoaded = true;
  })
})
