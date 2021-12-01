import {createReducer} from '@reduxjs/toolkit'
import { Genre } from 'const'
import { setDisplayQuests, loadQuests, setGenre } from 'store/actions'
import { filterQuests } from 'utils/utils'

const initState = {
  quests: [],
  areQuestsLoaded: false,
  genre: Genre.All.server,
  displayQuests: []
}

export const catalogReducer = createReducer(initState, (builder) => {
  builder
    .addCase(loadQuests, (state, action) => {
    state.quests = action.payload;
    state.areQuestsLoaded = true;
  })
    .addCase(setGenre, (state, action) => {state.genre = action.payload;})
    .addCase(setDisplayQuests, (state) => {state.displayQuests = filterQuests(state.quests, state.genre);})

})
