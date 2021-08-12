import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';

ReactDOM.render(
  <FavoritesContextProvider>
    <App />
  </FavoritesContextProvider>,
  document.getElementById('root')
);
