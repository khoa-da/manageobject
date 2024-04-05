import "./App.scss";
import { Container } from "react-bootstrap";
import Header from "./components/Header/header";
import TableUsers from "./components/TableUser";
import ModalAddNew from "./components/ModalAddNew";
import { useState } from "react";

function App() {
  const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);

  const handleClose = () => {
    setIsShowModalAddNew(false);
  };
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span>
            <b>List User</b>
          </span>
          <button
            className="btn btn-primary"
            onClick={() => setIsShowModalAddNew(true)}
          >
            Add new user
          </button>
        </div>

        <TableUsers />
      </Container>
      <ModalAddNew show={isShowModalAddNew} handleClose={handleClose} />
    </div>
  );
}

export default App;
