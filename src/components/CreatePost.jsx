import { useContext } from "react";
import { useRef } from "react";
import { PostList as postListData } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(postListData);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    addPost(userId, title, body, reactions, tags);

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="user-id" className="form-label">
          User Id
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="user-id"
          placeholder="Enter user-id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          ref={titleElement}
          type="text"
          className="form-control"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="post-content" className="form-label">
          Post Content
        </label>
        <textarea
          ref={bodyElement}
          type="text"
          className="form-control"
          id="post-content"
          placeholder="Post Content"
        ></textarea>
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="How many people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="please enter tags using space"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
