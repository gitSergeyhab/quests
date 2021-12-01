const { ReducerName } = require("store/root-reducer")

const field = [ReducerName.Catalog];

export const getGenre = (state) => state[field].genre;
export const getQuests = (state) => state[field].quests;
export const getQuestsLoadedStatus = (state) => state[field].areQuestsLoaded;
export const getDisplayQuests = (state) => state[field].displayQuests;
