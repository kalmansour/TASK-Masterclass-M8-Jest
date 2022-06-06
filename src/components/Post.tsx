import { Post as PostModel } from "../models";

type PostProps = {
  post: PostModel;
};

const Post = ({ post }: PostProps) => {
  return (
    <div>
      <h2>{post.name}</h2>
      <ul>
        <li>Email: {post.email}</li>
        <li>Address: {post.address}</li>
      </ul>
      <button>Go to post</button>
    </div>
  );
};

export default Post;
