import {createReducer} from '@reduxjs/toolkit';

import { setDisplayQuests, loadQuests, setGenre, setQuestsErrorStatus } from 'store/actions';
import { filterQuests } from 'utils/utils';
import { Genre } from 'const';


const initState = {
  quests: [],
  areQuestsLoaded: false,
  genre: Genre.All.server,
  displayQuests: [],
  error: false,
};

export const catalogReducer = createReducer(initState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
    state.quests = action.payload;
    state.areQuestsLoaded = true;
  })
    .addCase(setGenre, (state, action) => {state.genre = action.payload;})
    .addCase(setDisplayQuests, (state) => {state.displayQuests = filterQuests(state.quests, state.genre);})
    .addCase(setQuestsErrorStatus, (state, action) => {state.error = action.payload;});
})
