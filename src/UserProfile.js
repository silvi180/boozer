import React from 'react';

const UserProfile = (props) => {


  console.log("user", props)
  return(
    <div>
      <h3>User Profile</h3>
      <h4>{props.user.firstname} {props.user.lastname}</h4>
      <h5><b>Email:</b> {props.user.email}</h5>
      <h5><b>Age:</b> {props.user.age}</h5>
      <h5><b>Bio:</b> {props.user.bio}</h5>
    </div>
  );
}

export default UserProfile;
