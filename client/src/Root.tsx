import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { store, Store } from '~/lib/store';

import App from '~/components/App';

const Root = () => (
  <Provider store={store as Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

export default Root;
