import React from "react";
import { RepoListProps, Repos } from "../types";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../queries/queries";

/**
 * Function component to get github repository list
 */
const Repository: React.FC<any> = ({  }) => {
    
  const { data } = useQuery(GET_REPOSITORIES);
  const repoList = data?.viewer?.repositories?.nodes;

  return (
    <div className="footer">
      <h3>All Repositories</h3>
      <ul>
        {(repoList || [] ).map((repo: Repos, index: any) => {
          return <li key={index}>{repo.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default Repository;
