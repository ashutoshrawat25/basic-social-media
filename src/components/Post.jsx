import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList as postListData } from "../store/post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(postListData);
  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>

        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
        </span>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary m-1" key={tag}>
            #{tag}
          </span>
        ))}
        <div className="alert alert-success mt-2" role="alert">
          This post has {post.reactions} reactions
        </div>
      </div>
    </div>
  );
};

export default Post;
