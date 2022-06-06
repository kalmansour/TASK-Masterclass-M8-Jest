import { useGetPosts } from "../services";
import Post from "./Post";

const PostList = () => {
  const postQuery = useGetPosts();

  if (postQuery.error) {
    return (
      <>
        <h1>Error!</h1>
        <code>{JSON.stringify(postQuery.error)}</code>
      </>
    );
  }

  if (postQuery.loading) {
    return <h1>Loading...</h1>;
  }

  const posts = postQuery.data.map((post) => (
    <Post key={post.id} post={post} />
  ));

  return (
    <div>
      <h1>Posts</h1>
      {posts}
    </div>
  );
};

export default PostList;
