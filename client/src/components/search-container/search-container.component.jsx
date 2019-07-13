import React, { Fragment } from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { SearchBarContainer } from './search-container.styles';
import SearchInput from '../search-input/search-input.component';

const GET_CHARACTER = gql`
  query character($lodestoneID: String!, $extended: Boolean) {
    character(lodestoneID: $lodestoneID, extended: $extended) {
      Achievements {
        List {
          Name
          ID
          Icon
          Points
        }
      }
      Character {
        Name
        ID
        Bio
      }
      FreeCompany {
        Name
        ActiveMemberCount
      }
      FreeCompanyMembers {
        Name
        Rank
      }
    }
  }
`;

const SearchContainer = props => {
  return (
    <Fragment>
      <Query
        query={GET_CHARACTER}
        variables={{ lodestoneID: '7611347', extended: true }}
      >
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>ERROR: {error.message}</p>;
          console.log(data);
          return (
            <SearchBarContainer>
              <SearchInput />
            </SearchBarContainer>
          );
        }}
      </Query>
    </Fragment>
  );
};

export default SearchContainer;
