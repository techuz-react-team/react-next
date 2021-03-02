import { gql } from "@apollo/client";

/**
 * query for username and email
 */
const GET_PROFILE = gql`
  query getProfile {
    viewer {
      login
      email
    }
  }
`;

/**
 * query for repository list
 */
const GET_REPOSITORIES = gql`
  query getRepositories {
    viewer {
      repositories(first: 100) {
        totalCount
        nodes {
          name
        }
      }
    }
  }
`;

/**
 * query for create repository
 */
const CREATE_REPO = gql`
  mutation createRepo($name: String!, $visibility: RepositoryVisibility!) {
    createRepository(input: { name: $name, visibility: $visibility }) {
      clientMutationId
      repository {
        id
        nameWithOwner
      }
    }
  }
`;

export { GET_PROFILE, GET_REPOSITORIES, CREATE_REPO };
