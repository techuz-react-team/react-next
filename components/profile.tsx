import React from "react";
import { IProfile } from "../types";
import { useQuery } from "@apollo/client";
import { GET_PROFILE } from "../queries/queries";

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


// import React from "react";
// import { useQuery } from "@apollo/client";
// import { GET_PROFILE } from "../queries/queries";
// import PropTypes from "prop-types";

// const Profile = () => {

//   const { loading, data } = useQuery(GET_PROFILE);

//   return (
//     <div className="topnav">
//       <div className="search-container">
//           { loading
//           ? (<p>Loading...</p>)
//           : (<p>Username: {data?.viewer?.login} || Email: {data?.viewer?.email}</p>)
//           }
//         <p>
//         </p>
//       </div>
//     </div>
//   );
// };

// Profile.propTypes = {
//   data: PropTypes.objectOf(
//     PropTypes.shape({
//       login: PropTypes.string,
//       email: PropTypes.string,
//     })
//   ),
// };

// export default Profile;
