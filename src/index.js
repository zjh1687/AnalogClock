import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/index.scss';

import store from './store';
import { Provider } from 'react-redux';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
