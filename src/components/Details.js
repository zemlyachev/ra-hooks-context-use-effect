import React, { useEffect, useState, useContext } from "react";
import UsersContext from "../contexts/UsersContext";

function Details() {
  const [state, setState] = useState({ isLoading: false });
  const { id } = useContext(UsersContext);

  useEffect(() => {
    setState({ isLoading: false });
    if (id) {
      setState({ isLoading: true });
      const ac = new AbortController();
      fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`,
        { signal: ac.signal }
      )
        .then((response) => response.json())
        .then((data) =>
          setState((prevState) => ({
            user: data,
            isLoading: false,
          }))
        );

      return () => {
        setState({ isLoading: false });
        ac.abort();
      };
    }
  }, [id]);

  return (
    <>
      {state.isLoading && <progress />}
      {state.user && (
        <div className="card">
          <img
            className="card-img-top"
            src={state.user.avatar}
            alt={state.user.name}
          />
          <div className="card-body">
            <h5 className="card-title">{state.user.name}</h5>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">City: {state.user.details.city}</li>
            <li className="list-group-item">
              Company: {state.user.details.company}
            </li>
            <li className="list-group-item">
              Position: {state.user.details.position}
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Details;
