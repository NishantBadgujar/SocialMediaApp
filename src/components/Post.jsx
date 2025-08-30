import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import {PostList} from "../store/PostListStore";


const Post = ({post}) =>{
    const {deletePost} = useContext(PostList);
    return(
        <div className="card post-card" style={{width: "30rem"}}>
        <img src="..." className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{post.title}
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger m-2" style={{cursor:"pointer"}}
                onClick={()=>deletePost(post.id)}>
                    <AiFillDelete/>
                </span>
            </h5>
            <p className="card-text">{post.body}</p>
            {post.tags.map(tag=><span key={tag} className="badge text-bg-warning mx-1"> {tag}</span>)}
            <div className="alert alert-success reactions" role="alert">
                This post is reacted by {post.reaction} peoples.
            </div>
            
        </div>
        </div>
    );

}

export default Post;