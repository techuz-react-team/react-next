import React from "react";
import { IProfile } from "../types";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../queries/queries";

/**
 * Function component to get github username and email
 */
const Profile: React.FC<any> = ({ }) => {
  
  const { loading, data } = useQuery<IProfile>(GET_PROFILE);

  return (
    <div className="topnav">
      <div className="search-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <p>
            Username: {data?.viewer?.login} || Email: {data?.viewer?.email}
          </p>
        )}
        <p></p>
      </div>
    </div>
  );
};

export default Profile;
