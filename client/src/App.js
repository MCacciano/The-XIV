import React from 'react';

import Search from './components/search-container/search-container.component';

// import { Query } from 'react-apollo';
// import { gql } from 'apollo-boost';

// const GET_CHARACTERS = gql`
//   query character {
//     character(
//       lodestoneID: "7611347"
//       extended: true
//       data: [FC, FCM, AC]
//       responseOptions: [Achievements, Character]
//     ) {
//       Achievements {
//         List {
//           Name
//           ID
//           Icon
//           Points
//         }
//       }
//       Character {
//         Name
//         ID
//         Bio
//       }
//       FreeCompany {
//         Name
//         ActiveMemberCount
//       }
//       FreeCompanyMembers {
//         Name
//         Rank
//       }
//     }
//   }
// `;

const App = () => {
  return (
    <div>
      <Search>placeholder</Search>
      <h1>App</h1>
      {/* <Query query={GET_CHARACTERS}>
        {({ data, loading, error }) => {
          if (loading) return <div>Loading...</div>;
          // if (error) return <p>ERROR: {error.message}</p>;

          console.log(data);
          return <div>placeholder</div>;
        }}
      </Query> */}
    </div>
  );
};

export default App;
