import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createUser } from "./Services/UserService";
import { toast } from "react-toastify";

const ModalAddNew = (props) => {
  const { show, handleClose, handleUpdateTable } = props;

  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSaveUser = async () => {
    let res = await createUser(name, job);
    console.log(res);
    if (res && res.id) {
      handleClose();
      setName("");
      setJob("");
      toast.success("Successfully fetched users");
      handleUpdateTable({ first_name: name, id: res.id });
    } else {
      toast.error("Failed to fetch users");
    }
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div class="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Job</label>
              <input
                type="text"
                className="form-control"
                placeholder="Job"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSaveUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddNew;
