import { toast } from "react-toastify";
import { loadQuest, loadQuests, setQuestErrorStatus, setQuestsErrorStatus } from "./actions";
import { ErrorMessage } from "const";


export const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};


export const fetchQuestsAction = () =>
  async(dispatch, _getState, api) => {
    try {
      dispatch(setQuestsErrorStatus(false));
      const {data} = await api.get(APIRoute.Quests);
      dispatch(loadQuests(data));
    } catch {
      dispatch(setQuestsErrorStatus(true));
      toast.error(ErrorMessage.FetchQuest);
    }
  };

export const fetchQuestAction = (id) =>
  async(dispatch, _getState, api) => {
    try {
      dispatch(setQuestErrorStatus(false));
      const {data} = await api.get(`${APIRoute.Quests}/${id}`);
      dispatch(loadQuest(data));
    } catch {
      dispatch(setQuestErrorStatus(true));
      toast.error(ErrorMessage.FetchQuest);
    }
  };

export const postOrderAction = (name, phone, peopleCount, close) =>
  async(_dispatch, _getState, api) => {
    try {
      await api.post(APIRoute.Orders, {name, peopleCount, phone, isLegal: true});
      close();
    } catch (e) {
      toast.error(ErrorMessage.PostOrder);
    }
  };

