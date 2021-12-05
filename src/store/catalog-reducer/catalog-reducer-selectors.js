import { ReducerName } from 'store/root-reducer';


const field = ReducerName.Catalog;

export const getGenre = (state) => state[field].genre;
export const getQuests = (state) => state[field].quests;
export const getQuestsLoading = (state) => state[field].loading;
export const getQuestsError = (state) => state[field].error;
export const getDisplayQuests = (state) => state[field].displayQuests;

