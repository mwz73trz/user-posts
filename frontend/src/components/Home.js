import { useEffect, useState } from "react";
import userPostsAPI from "../api/userPostsAPI";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const data = await userPostsAPI.getPosts();
    setPosts(data ? data : []);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        {posts.map((post) => (
          <h3 key={post.id}>{post.title}</h3>
        ))}
      </div>
    </div>
  );
};

export default Home;
