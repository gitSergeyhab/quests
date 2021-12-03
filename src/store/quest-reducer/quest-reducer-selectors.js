import { ReducerName } from '../root-reducer';


const field = ReducerName.Quest;

export const getQuest = (state) => state[field].quest;
export const getQuestLoadedStatus = (state) => state[field].isQuestLoaded;
export const getQuestErrorStatus = (state) => state[field].error;
