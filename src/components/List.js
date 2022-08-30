import React, { useEffect, useContext } from "react";
import UsersContext from "../contexts/UsersContext";

function List() {
  const { users, setUsers, id, setId } = useContext(UsersContext);

  console.log(process.env);

  useEffect(() => {
    const ac = new AbortController();
    fetch(
      "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json",
      { signal: ac.signal }
    )
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
