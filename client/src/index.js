import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import configureStore from './redux/store';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient, gql } from 'apollo-boost';

import App from './App';

import './index.css';

const link = createHttpLink({
  uri: 'http://localhost:5000/graphql',
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={configureStore()}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

/* working test query */
// client
//   .query({
//     query: gql`
// query character {
//   character(
//     lodestoneID: "7611347"
//     extended: true
//     data: [FC, FCM, AC]
//     responseOptions: [Achievements, Character]
//   ) {
//     Achievements {
//       List {
//         Name
//         ID
//         Icon
//         Points
//       }
//     }
//     Character {
//       Name
//       ID
//       Bio
//     }
//     FreeCompany {
//       Name
//       ActiveMemberCount
//     }
//     FreeCompanyMembers {
//       Name
//       Rank
//     }
//   }
// }
//     `,
//   })
//   .then(res => console.log(res));
