/**
 * Interface to get email and usename of github
 */
export interface IProfile {
  viewer: {
    login: string;
    email: string;
  };
}

/**
 * Interface to get repositories list of github
 */
export interface RepoListProps {
  viewer: {
    repositories: {
      nodes: Repos[];
    };
  };
}

/**
 * Interface to get name of repositories list of github
 */
export interface Repos {
  name: string;
}

/**
 * Interface to create repo using name and visibility
 */
export interface RepoFormData {
  name: string;
  Visibilty: string;
}
