import { State } from 'types/types';

export const getGenre = (state: State) => state.catalog.genre;
export const getDisplayQuests = (state: State) => state.catalog.displayQuests;
