import { useContext, useRef } from "react";
import { PostList } from "../store/PostListStore";

const CreatePost = () =>{

  const {addPost} = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();

  const submitHandler = (e)=>{
    e.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const tags = tagElement.current.value.split(",").map(tag=> tag.trim());

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";

    addPost(userId, title, body, reaction, tags);
  }

    return (
      <form className="create-post" onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            User Id
          </label>
          <input
            type="text"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Enter your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            className="form-control"
            id="title"
            placeholder="Enter post title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Body
          </label>
          <textarea
            rows={4}
            ref={bodyElement}
            type="text"
            className="form-control"
            id="body"
            placeholder="Enter post body"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            People reactions
          </label>
          <input
            type="text"
            ref={reactionElement}
            className="form-control"
            id="reactions"
            placeholder="Enter post reactions"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Post tags
          </label>
          <input
            type="text"
            ref={tagElement}
            className="form-control"
            id="tags"
            placeholder="Enter post tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    );
}
export default CreatePost;