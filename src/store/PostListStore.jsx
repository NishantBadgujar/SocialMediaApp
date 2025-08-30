import { createContext, useReducer } from "react";

export const PostList = createContext({
    postList:[],
    addPost:()=>{},
    deletePost:()=>{}

});

const postListReducer = (currPostList, action)=> {
    let newPostList = currPostList;
    if(action.type === "Delete_Post"){
        newPostList = currPostList.filter(post=> post.id !== action.payload.postId);
    }
    return newPostList;
}

const PostListProvider = ({children})=>{
 
    const addPost =()=>{};
    const deletePost =(postId)=>{
        dispatchPostList({
            type:"Delete_Post", 
            payload: {
                postId,

            }
        })
    };
    const [postList, dispatchPostList] = useReducer(postListReducer , default_Post_List);

    return(<PostList.Provider value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost
    }}>{children}</PostList.Provider>)
}

const default_Post_List = [
    {

        id: "1",
        title:"Going to Mumbai",
        body:"I am goint to mumbai for my vacations",
        reaction:2,
        userId:"user-3",
        tags: ["vacation", "Bombay"]
    },
    {
    id: "2",
        title:"Passed exams",
        body:"I passed exams in one night study.",
        reaction:15,
        userId:"user-5",
        tags: ["Exams", "Backbenchers"]
    }
]
export default PostListProvider;