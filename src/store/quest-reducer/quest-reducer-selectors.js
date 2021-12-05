import { ReducerName } from '../root-reducer';


const field = ReducerName.Quest;

export const getQuest = (state) => state[field].quest;
export const getQuestLoading = (state) => state[field].loading;
export const getQuestError = (state) => state[field].error;
