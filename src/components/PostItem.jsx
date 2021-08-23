import React, { memo } from "react";
import { useHistory } from "react-router";
import "../styles/Post.css";

import MyButton from "./UI/Button/MyButton";

const Post = memo(({ post, index, removePost }) => {
  const router = useHistory();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__buttons">
        <MyButton onClick={() => router.push(`/posts/${post.id}`)}>
          Open post
        </MyButton>
        <MyButton onClick={() => removePost(post)}>Delete</MyButton>
      </div>
    </div>
  );
});

export default Post;
