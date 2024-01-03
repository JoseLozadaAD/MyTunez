import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import MyTunez from './myTunez/pages/MyTunez.tsx';
import { store } from './myTunez/store/store.ts';

import '../public/styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <MyTunez />
    </Provider>
  </React.StrictMode>,
);
