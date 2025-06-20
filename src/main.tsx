import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './fonts.css';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './services/store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);