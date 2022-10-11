import React from "react";

const UsersList = (props) => {
  const users = props.users.map((user) => (
    <li key={user.phone}>
      <img src={user.picture.large} alt={user.name.last} />
      <h4>
        {user.name.title} {user.name.first} {user.name.last}
      </h4>
      <p>{user.email}</p>
    </li>
  ));

  return <ul>{users}</ul>;
};

export default UsersList;
