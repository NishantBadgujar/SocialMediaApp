const CreatePost = () =>{
    return( <form className="create-post">
  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="userId" placeholder="Enter your user id"/>
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder="Enter post title"/>
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Body</label>
    <textarea rows={4} type="text" className="form-control" id="body" placeholder="Enter post body"/>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">People reactions</label>
    <input type="text" className="form-control" id="reactions" placeholder="Enter post reactions"/>
  </div><div className="mb-3">
    <label htmlFor="tags" className="form-label">Post tags</label>
    <input type="text" className="form-control" id="tags" placeholder="Enter post tags"/>
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
);
}
export default CreatePost;