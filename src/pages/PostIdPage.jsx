import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import PostComments from "../components/PostComments";
import MyLoader from "../components/UI/Loader/MyLoader";
import { useFetching } from "../hooks/useFetching";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  }, params.id);

  const [fetchCommentsById, isLoadingComments, commentsError] = useFetching(
    async (id) => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
    },
    params.id
  );

  useEffect(() => {
    fetchPostById();
    fetchCommentsById();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>You open page of post with ID = {params.id}</h1>
      {isLoading ? (
        <MyLoader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      {isLoadingComments ? <MyLoader /> : <PostComments comments={comments} />}
    </div>
  );
};

export default PostIdPage;
