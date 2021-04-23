import React from "react";
import { Toast, Col, Button } from "react-bootstrap";
import { ConsumerContext } from "../../context/main_context";
import("./post-card.css");

const PostCard = ({ value }) => {
  const { setPost, setShowModal, remove_post, setPostList } = ConsumerContext();
  const modal_post = () => {
    setPost(value);
    setShowModal(true);
  };
  const delete_post = () => {
    const newList = remove_post(value.id);
    console.log(`nueva lista ${newList} y el id ${value.id}`);
    setPostList(newList);
  };
  return (
    <Col className="post_card" xs={12}>
      <Toast
        onClose={() => {
          console.log("borrar ", value);
        }}
        className="aqua"
      >
        <Toast.Header>
          <strong className="mr-auto">{value.title}</strong>
        </Toast.Header>
        <Toast.Body>{value.body}</Toast.Body>
        <Toast.Body className="d-flex justify-content-end">
          <Button className="mr-1" size="sm" onClick={modal_post}>
            Details
          </Button>
          <Button
            className="ml-1"
            size="sm"
            variant="danger"
            onClick={delete_post}
          >
            DELETE
          </Button>
        </Toast.Body>
      </Toast>
    </Col>
  );
};

export default PostCard;
