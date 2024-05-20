import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import toast from "react-hot-toast";

function Popup(props) {
  console.log(props);
  return (
    <>
      <Modal show={props.show}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Username</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <input
            type="text"
            onChange={(e) => {
              props.set({ user: e.target.value });
            }}
          />
          !
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              props.set({ show: false });
              if (props.user == "") {
                toast.success("hello there");
              } else {
                toast.success(`hello ${props.user}`);
              }
            }}
          >
            Apply
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup;
