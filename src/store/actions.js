import { createAction } from '@reduxjs/toolkit';


export const ActionType = {
  LoadQuests: 'data/catalog/LoadQuests',
  LoadQuest: 'data/quests/LoadQuests',
  SetGenre: 'catalog/SetGenre',
  GetDisplayQuests: 'catalog/GetDisplayQuests'
}


export const loadQuests = createAction(ActionType.LoadQuests, (quests) => ({payload: quests}));
export const setGenre = createAction(ActionType.SetGenre, (genre) => ({payload: genre}));
export const setDisplayQuests = createAction(ActionType.GetDisplayQuests);

export const loadQuest = createAction(ActionType.LoadQuest, (quest) => ({payload: quest}));

