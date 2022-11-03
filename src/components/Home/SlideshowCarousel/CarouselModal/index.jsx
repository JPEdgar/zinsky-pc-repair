import React from "react";

import { Modal, Button } from "react-bootstrap";

const CarouselModal = ({ onHide, show, modalContent = {} }) => {
  return (
    <Modal
      show={show}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalContent.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{modalContent.header}</h4>
        <p>{modalContent.body}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => onHide()}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CarouselModal;
