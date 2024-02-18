import React from "react";
import { useParams } from "react-router-dom";

//  we use curly braces when we have not exported the component
// if we have exported the component we don't use curly braces

const UserProfile = () => {
  const { userId, id } = useParams();
  return (
    <>
      <div>
        <h1>User Profile</h1>
        <p>User ID : {userId}</p>
      </div>
      
    </>
  );
};

export default UserProfile;
