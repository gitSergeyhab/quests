import { loadQuests } from "./actions";

export const APIRoute = {
  Quests: 'quests',
  Orders: 'orders',
}


export const fetchQuestsAction = () =>
  async(dispatch, getState, api) => {
    const {data} = await api.get(APIRoute.Quests);
    dispatch(loadQuests(data))
  }
