import "./App.scss";
import AddNewUser from "./components/AddNewUser";
import Header from "./components/Header";
import TableUser from "./components/TableUser";
import { useState } from "react";
function App() {
  const [addNew, setaddNew] = useState(false);
  const setHandleClose = () => {
    setaddNew(false);
  };
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="my-3 add-new">
          <span>
            <h5>This is all Users:</h5>
          </span>
          <button className="btn btn-info" onClick={() => setaddNew(true)}>
            Add new user{" "}
          </button>
        </div>
        <TableUser />
      </div>
      <AddNewUser show={addNew} handleClose={setHandleClose} />
    </>
  );
}

export default App;
