import { toast } from "react-toastify";
import { ErrorMessage, ERROR_RESPONSE } from "const";
import { createAsyncThunk } from "@reduxjs/toolkit";


const SUCCESS_MESSAGE = 'Заявка принята, мы перезвоним'

const APIRoute = {
  Quests: '/quests',
  Orders: '/orders',
};



export const fetchQuests = createAsyncThunk(
  'catalog/fetchQuests',
  async(_, {rejectWithValue, extra}) => {
    try {
      const {data} = await extra.get(APIRoute.Quests);
      return data;
    } catch {
      toast.error(ErrorMessage.FetchQuests);
      return rejectWithValue(ERROR_RESPONSE);
    }
  }
);

export const fetchOneQuest = createAsyncThunk(
  'quest/quest',
  async(id, {rejectWithValue, extra}) => {
    try {
      const {data} = await extra.get(`${APIRoute.Quests}/${id}`);
      return data;
    } catch {
      toast.error(ErrorMessage.FetchQuest)
      return rejectWithValue(ERROR_RESPONSE);
    }
  }
);

export const postOrder = createAsyncThunk(
  'quest/order',
  async({name, peopleCount, phone, close}, {rejectWithValue, extra}) => {
    try {
      await extra.post(APIRoute.Orders, {name, peopleCount, phone, isLegal: true});
      close();
      toast.success(SUCCESS_MESSAGE);
    } catch {
      toast.error(ErrorMessage.PostOrder);
      return rejectWithValue(ERROR_RESPONSE);
    }
  }
);
