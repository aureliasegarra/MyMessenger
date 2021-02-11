// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// == Import data

import App from 'src/components/App';
import store from 'src/store';

// 1. What to render => React root element
const rootReactElement = (
  <Provider store={store}>
    <h1 className="title">ChatApp</h1>
    <App />
  </Provider>
);
// 2. Where to render
const target = document.getElementById('root');
// 3. Render
render(rootReactElement, target);
