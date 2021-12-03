import { StrictMode } from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';

import App from 'components/app/app';
import { rootReducer } from 'store/root-reducer';
import { createApi } from 'serveces/api';
import { fetchQuestsAction } from 'store/api-actions';

import 'react-toastify/dist/ReactToastify.css';


const api = createApi();


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: api}}),
});

store.dispatch(fetchQuestsAction())


render(
  <StrictMode>
    <ToastContainer/>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
