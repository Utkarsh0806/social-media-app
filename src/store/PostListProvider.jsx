import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  addInitialPosts: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, postListDispatcher] = useReducer(postListReducer, []);

  const addPost = (userId, title, body, reactions, tags) => {
    postListDispatcher({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    postListDispatcher({
      type: "ADD_INITIAL_POSTS",
      payload: { posts },
    });
  };

  const deletePost = (postId) => {
    postListDispatcher({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostListContext.Provider
      value={{ postList, addPost, addInitialPosts, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
