import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { ApolloProvider } from 'react-apollo';
import client from './client';

import App from './App';

import './index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
