import React from "react";
import PostComment from "./PostComment";

const PostComments = ({ comments }) => {
  return (
    <div style={{padding:"10px"}}>
      <h2>Comments</h2>
      {comments.map((comment, index) => (
        <div key={comment.id}>
          <PostComment comment={comment} index={index} />
        </div>
      ))}
    </div>
  );
};

export default PostComments;
