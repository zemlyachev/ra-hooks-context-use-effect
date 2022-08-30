import React from "react";
import UsersContext from "./UsersContext";

export default function UsersProvider(props) {
  const [users, setUsers] = React.useState([]);
  const [id, setId] = React.useState();

  return (
    <UsersContext.Provider value={{ users, setUsers, id, setId }}>
      {props.children}
    </UsersContext.Provider>
  );
}
