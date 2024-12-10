import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { PostListContext } from "../store/PostListProvider";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostListContext);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger deletePost"
            onClick={() => deletePost(post.id)}
          >
            <AiFillDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {/* {post.tags.map((tags) => (
          <span key={tags} className="badge text-bg-primary post-tag">
            {tags}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          This post is reacted by {post.reactions} people.
        </div> */}
      </div>
    </div>
  );
};
export default Post;
