import { StrictMode } from 'react';
import {Provider} from 'react-redux'
import { render } from 'react-dom';
import App from 'components/app/app';
import { rootReducer } from 'store/root-reducer';
import {configureStore} from '@reduxjs/toolkit';
import { createApi } from 'serveces/api';
import { fetchQuestsAction } from 'store/api-actions';
import { getDisplayQuests } from 'store/actions';


const api = createApi();


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}),
});

store.dispatch(fetchQuestsAction())


render(
  <StrictMode>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
