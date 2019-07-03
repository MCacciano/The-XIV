import React from "react"
import { graphql } from "gatsby"
import { Query } from "react-apollo"
import gql from "graphql-tag"

// export const GatsbyQuery = graphql`
//   {
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
// `

export const APOLLO_QUERY = gql`
  {
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
      # FreeCompany {
      #   Name
      #   ActiveMemberCount
      # }
      # FreeCompanyMembers {
      #   Name
      #   Rank
      # }
    }
  }
`

export default () => {
  return (
    <div>
      <Query query={APOLLO_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>
          if (error) return <p>Error: {error.message}</p>

          console.log(data)
          return (
            <div>
              {/* <h1>{data}</h1> */}
              <p>null happened if this is all you see</p>
            </div>
          )
        }}
      </Query>
    </div>
  )
}
