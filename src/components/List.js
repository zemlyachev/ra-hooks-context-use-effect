import React, { useEffect, useContext } from "react";
import UsersContext from "../contexts/UsersContext";

function List() {
  const { users, setUsers, id, setId } = useContext(UsersContext);

  useEffect(() => {
    const ac = new AbortController();
    fetch(process.env.REACT_APP_USERS_URL, { signal: ac.signal })
      .then((response) => response.json())
      .then((data) => setUsers(data));

    return () => {
      ac.abort();
    };
  }, []);

  return (
    <div>
      <div className="btn-group-vertical">
        {users.map((o) => {
          return (
            <button
              key={o.id}
              type="button"
              className={`btn btn-${o.id === id ? "primary" : "light"}`}
              onClick={() => setId(o.id)}
            >
              {o.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default List;
