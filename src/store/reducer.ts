import { combineReducers } from "redux";
import { queryApi } from "serveces/query-api";
import { catalogSlice } from "./catalog-reducer/catalog-slice";

export const reducer = combineReducers({
  [queryApi.reducerPath] : queryApi.reducer,
  catalog: catalogSlice.reducer,
})

export type ReducerState = ReturnType<typeof reducer>;
