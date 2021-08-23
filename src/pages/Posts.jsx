import React, { useCallback, useEffect, useState, useRef } from "react";
import PostService from "../API/PostService";
import "../App.css";
import MyErrorAlert from "../components/UI/Error/MyErrorAlert";
import PostForm from "../components/Form/PostForm";
import MyLoader from "../components/UI/Loader/MyLoader";
import MyModal from "../components/Modal/MyModal";
import PostFilter from "../components/PostFilter/PostFilter";
import PostList from "../components/PostList";
import MyButton from "../components/UI/Button/MyButton";
import { useFetching } from "../hooks/useFetching";
import { usePosts } from "../hooks/usePosts";
import { usePagination } from "../hooks/usePagination";
import MyPagination from "../components/UI/Pagination/MyPagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/Select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const [
    limit,
    setLimit,
    page,
    setPage,
    totalPages,
    setTotalPages,
    pagesArray,
  ] = usePagination();

  const [fetchingPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(totalCount);
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () =>
    setPage(page + 1)
  );

  useEffect(() => {
    fetchingPosts();
  }, [page, limit]);

  const createPost = useCallback(
    (newPost) => {
      setPosts([...posts, newPost]);
      setModalVisible(false);
    },
    [posts, setPosts]
  );

  const deletePost = useCallback(
    (postToDelete) => {
      setPosts(posts.filter((post) => post.id !== postToDelete.id));
    },
    [posts, setPosts]
  );

  return (
    <div className="App">
      <MyButton
        style={{ marginTop: "10px" }}
        onClick={() => setModalVisible(true)}
      >
        Create user
      </MyButton>

      <MyModal visible={modalVisible} setVisible={setModalVisible}>
        <PostForm create={createPost} />
      </MyModal>

      <PostFilter filter={filter} setFilter={setFilter} />

      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Count of elements in the page"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Load all elements" },
        ]}
      />

      <PostList
        removePost={deletePost}
        posts={sortedAndSearchedPosts}
        title="Posts list"
      ></PostList>
      <div ref={lastElement} />

      {isPostsLoading && <MyLoader />}
      {postsError && <MyErrorAlert>{postsError}</MyErrorAlert>}
      <MyPagination page={page} setPage={setPage} pagesArray={pagesArray} />
    </div>
  );
}

export default Posts;
