import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/PostListStore";
import WelcomeMsg from "./WelcomeMsg";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {

  const { postList, addInitialPosts } = useContext(PostListData);

  const [loadPosts, setLoadPosts] = useState(false);

  useEffect(() => {
    setLoadPosts(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        addInitialPosts(obj.posts)
        setLoadPosts(false);
      });
  }, []);
  
  // const onGetPostsFromServer = () =>{
  // }
  
  return (
    <>
      {loadPosts && <LoadingSpinner />}
      {!loadPosts && postList.length === 0 && <WelcomeMsg />}
      {!loadPosts && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
