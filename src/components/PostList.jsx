import React, { useContext } from "react";
import Post from "./Post";
import {PostList as PostListData} from "../store/PostListStore";
const PostList = () => {

  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      <div className="post-list mt-5">

        {postList.map((post) => <Post key={post.id} post={post}/>)}
        
        
      </div>
    </>
  );
};
export default PostList;
