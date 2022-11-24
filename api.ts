export const getProfile = gql`
  query Profile($handle: Handle!) {
    profile(request: { handle: $handle }) {
      id
      name
      bio
      picture {
        ... on MediaSet {
          original {
            url
          }
        }
      }
      handle
    }
  }
`;

export const getPublications = gql`
  query Publications($id: ProfileId!, $limit: LimitScalar) {
    publications(
      request: { profileId: $id, publicationTypes: [POST], limit: $limit }
    ) {
      items {
        __typename
        ... on Post {
          ...PostFields
        }
      }
    }
  }
  fragment PostFields on Post {
    id
    metadata {
      ...MetadataOutputFields
    }
  }
  fragment MetadataOutputFields on MetadataOutput {
    content
  }
`;
