import { StrictMode } from 'react';
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';

import App from 'components/app/app';
import { queryApi } from 'serveces/query-api';
import { catalogSlice } from 'store/catalog-reducer/catalog-slice';

import 'react-toastify/dist/ReactToastify.css';


const store = configureStore({
  reducer: {
    [queryApi.reducerPath] : queryApi.reducer,
    catalog: catalogSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(queryApi.middleware),
});


render(
  <StrictMode>
    <ToastContainer/>
    <Provider store={store}>
     <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
