import { createAction } from '@reduxjs/toolkit';


export const ActionType = {
  LoadQuests: 'data/catalog/LoadQuests',
  SetGenre: 'catalog/SetGenre',
  GetDisplayQuests: 'catalog/GetDisplayQuests',
  SetQuestsErrorStatus: 'catalog/SetQuestsErrorStatus',
  LoadQuest: 'data/quest/LoadQuests',
  SetQuestLoadedStatus: 'quest/SetQuestLoadedStatus',
  SetQuestErrorStatus: 'quest/SetQuestErrorStatus',
}


export const loadQuests = createAction(ActionType.LoadQuests, (quests) => ({payload: quests}));
export const setGenre = createAction(ActionType.SetGenre, (genre) => ({payload: genre}));
export const setDisplayQuests = createAction(ActionType.GetDisplayQuests);
export const setQuestsErrorStatus = createAction(ActionType.SetQuestsErrorStatus, (status) => ({payload: status}));

export const loadQuest = createAction(ActionType.LoadQuest, (quest) => ({payload: quest}));
export const setQuestLoadedStatus = createAction(ActionType.SetQuestLoadedStatus, (status) => ({payload: status}));
export const setQuestErrorStatus = createAction(ActionType.SetQuestErrorStatus, (status) => ({payload: status}));


