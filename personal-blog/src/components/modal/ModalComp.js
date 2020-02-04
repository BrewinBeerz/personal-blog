import React from "react";
import ReactDOM from "react-dom";
import { Modal, Button } from "react-bootstrap";

const ModalComp = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <Modal show={isShowing} onHide={HTMLHeadingElement} animation={false} size="lg">
            <Modal.Header closeButton onClick={hide}>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Woohoo, you're reading this text in a modal!
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={hide}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </React.Fragment>,
        document.body
    )
    : null;

export default ModalComp;
