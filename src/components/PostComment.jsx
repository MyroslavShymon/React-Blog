import React from "react";

const PostComment = ({ comment, index }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px" }}>
      <div style={{ padding: "10px" }}>{index + 1}</div>
      <div>
        <h3>{comment.name}</h3>
        <div style={{ margin: "5px 0 0 0" }}>{comment.body}</div>
      </div>
    </div>
  );
};

export default PostComment;
