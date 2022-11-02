import React from "react";

export const User = () => {
  let [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        return resp.json();
      })
      .then((resp) => {
        setUsers(resp);
      });
  });
  return (
    <div>
      {users.map((el) => (
        <p data-testid="users">{el.name}</p>
      ))}
    </div>
  );
};
