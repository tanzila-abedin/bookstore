import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import { nanoid } from 'nanoid';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import App from './components/App';
import rootReducer from './reducers';

const initialState = {
  books: [
    { id: nanoid(), title: 'Rich Dad Poor Dad', category: 'Finance' },
    { id: nanoid(), title: 'The Art of seduction', category: 'Non-fiction' },
  ],
};

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
