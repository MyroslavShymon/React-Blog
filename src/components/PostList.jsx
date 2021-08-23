import React, { memo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = memo(({ posts, title, removePost }) => {
  if (!posts.length) {
    return <h1 style={{ textAlign: "center" }}>There is no posts</h1>;
  } else
    return (
      <>
        <h1 style={{ textAlign: "center" }}>{title}</h1>
        <TransitionGroup>
          {posts.map((post, index) => (
            <CSSTransition key={post.id} timeout={400} classNames="post">
              <PostItem
                removePost={removePost}
                index={index + 1}
                post={post}
              ></PostItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </>
    );
});

export default PostList;
