import React from 'react';
import ReactDOM from 'react-dom/client';
import MyTunez from './MyTunez.tsx';
import '../public/styles/main.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyTunez />
  </React.StrictMode>,
);
