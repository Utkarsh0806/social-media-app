import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/PostListProvider";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        addInitialPosts(data);
        setFetching(false);
      });
  }, []);

  // fetch("https://dummyjson.com")
  //   .then((res) => res.json)
  //   .then((data) => addInitialPosts(data.posts))
  //   .then(console.log("HI, I am clicked."))

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
};
export default PostList;
