import React from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_CHARACTERS = gql`
  query character {
    character(
      lodestoneID: "7611347"
      extended: true
      data: [FC, FCM, AC]
      responseOptions: [Achievements, Character]
    ) {
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
