import "./App.css";
import Details from "./components/Details";
import List from "./components/List";
import UsersProvider from "./contexts/UsersProvider";

function App() {
  return (
    <UsersProvider>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-3 col-sm-3 col-md-2">
            <List />
          </div>
          <div className="col-5 col-sm-4 col-md-3">
            <Details />
          </div>
        </div>
      </div>
    </UsersProvider>
  );
}

export default App;
