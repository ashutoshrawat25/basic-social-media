import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId,
    );
  }
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList];
  }

  return newPostList;
};

const PostListProvider = ({ children }) => {
  const addPost = (userId, title, body, reactions, tags) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title,
        body,
        reactions,
        userId,
        tags,
      },
    });
  };
  const deletePost = (postId) => {
    console.log(postId);
    dispatchpostList({
      type: "DELETE_POST",
      payload: { postId },
    });
  };

  const [postList, dispatchpostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST,
  );
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Going for vacation",
    body: "hello i am going for vacation hpoe to enjoy peace out",
    reactions: 23,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
  {
    id: 2,
    title: "React is fun",
    body: "react is so much fun in learning",
    reactions: 15,
    userId: "user-9",
    tags: ["vacation", "mumbai", "enjoy"],
  },
];

export default PostListProvider;
