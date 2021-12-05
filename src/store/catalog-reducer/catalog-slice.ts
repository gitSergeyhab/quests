import { createSlice } from '@reduxjs/toolkit';
import { Genre } from 'const';
import { filterQuests } from 'utils/utils';
import { Quest } from 'types/types';



type InitialState = {
  genre: string,
  displayQuests: Quest[],
};

const initialState: InitialState = {
  genre: Genre.All.Server,
  displayQuests: [],
};


export const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setGenre(state, action) {state.genre = action.payload;},
    setDisplayQuests(state, action) {state.displayQuests = filterQuests(action.payload, state.genre);},
  },
});

export const {setGenre, setDisplayQuests} = catalogSlice.actions;
