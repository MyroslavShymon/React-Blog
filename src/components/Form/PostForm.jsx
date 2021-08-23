import React, { useState, useRef } from "react";

import MyButton from "../UI/Button/MyButton";
import MyInput from "../UI/Input/MyInput";

const PostForm = ({ create }) => {
  const initialPost = useRef({ title: "", body: "" });
  const [post, setPost] = useState(initialPost);

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost(initialPost);
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Post name"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Post body"
      />
      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
};

export default PostForm;
