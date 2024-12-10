import { useContext, useRef } from "react";
import { PostListContext } from "../store/PostListProvider";

const CreatePost = () => {
  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const { addPost } = useContext(PostListContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter your UserId here :
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="UserId"
          placeholder="Enter your UserId here"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Title" className="form-label">
          Title :
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="Title"
          placeholder="How are you feeling today..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Enter your content :
        </label>
        <textarea
          rows={4}
          type="text"
          ref={bodyElement}
          className="form-control"
          id="UserId"
          placeholder="Tell us more about it"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter your reactions here :
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactions"
          placeholder="How many people reacted on your post"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="Tags" className="form-label">
          Enter your Tags here :
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="Tags"
          placeholder="Enter your tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
