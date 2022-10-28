import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userPostsAPI from "../api/userPostsAPI";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState(null);

  const loadPost = async () => {
    const data = await userPostsAPI.getSinglePost(params.id);
    setPost(data);
  };

  useEffect(() => {
    loadPost();
  }, [params.id]);

  const renderPost = () => {
    if (!post) {
      return null;
    }
    return (
      <div>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
        <p>{post.created_date}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Post Details</h1>
      {renderPost()}
    </div>
  );
};

export default Post;
