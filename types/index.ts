export interface IProfile {
  viewer: {
    login: string;
    email: string;
  };
}

export interface RepoListProps {
  viewer: {
    repositories: {
      nodes: Repos[]
    }
  }
}

export interface Repos {
  name: string;
}

export interface RepoFormData {
  name: string;
  Visibilty: string;
}
