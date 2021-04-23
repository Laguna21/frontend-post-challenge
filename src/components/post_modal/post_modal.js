import React from "react";
import { Modal, Button } from "react-bootstrap";
import { ConsumerContext } from "../../context/main_context";
const PostModal = ({ value }) => {
  const { post, showModal, setShowModal } = ConsumerContext();

  const handleClose = () => setShowModal(false);
  return post ? (
    <Modal show={showModal ? showModal : showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{post.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>{post.body}</p>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">EDIT</Button>
        <Button variant="warning" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    ""
  );
};

export default PostModal;
