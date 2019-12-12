import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import reducers from './reducers';
import './assets/main.scss';

const store = createStore(reducers, applyMiddleware(thunk));
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));
