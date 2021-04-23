import React from "react";
import { Row } from "react-bootstrap";
import { ConsumerContext } from "../../context/main_context";
import PostCard from "../post-card/post-card";

const PostList = () => {
  const { postList } = ConsumerContext();

  return (
    <Row className="post_list">
      {postList.map((i) => {
        return <PostCard value={i} key={i.id} />;
      })}
    </Row>
  );
};

export default PostList;
