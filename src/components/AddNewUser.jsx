import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

const AddNewUser = (props) => {
  const { show, handleClose } = props;
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const handleClick = () => {
    console.log("Check states: ", "Name:", name, "Job: ", job);
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new users</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="add-new-user">
          <form>
            <div className="form-group">
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
                placeholder="Job description"
                value={job}
                onChange={(event) => setJob(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleClick()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddNewUser;
