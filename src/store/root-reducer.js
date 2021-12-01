import { combineReducers } from 'redux';
import { catalogReducer } from './catalog-reducer/catalog-reducer';
import { quesReducer } from './quest-reducer/quest-reducer';

export const ReducerName = {
  Catalog: 'Catalog',
  Quest: 'Quest'
}

export const rootReducer = combineReducers({
  [ReducerName.Catalog] : catalogReducer,
  [ReducerName.Quest] : quesReducer,
})
