import { combineReducers } from 'redux';
import { catalogSlice } from './catalog-reducer/catalog-slice';
import { questSlice } from './quest-reducer/quest-slice';


export const ReducerName = {
  Catalog: 'catalog',
  Quest: 'quest'
}

export const rootReducer = combineReducers({
  [ReducerName.Catalog] : catalogSlice.reducer,
  [ReducerName.Quest] : questSlice.reducer,
})
