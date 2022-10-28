import "../App.css";
import { ListGroup } from "react-bootstrap";
import { useEffect, useState } from "react";
import userPostsAPI from "../api/userPostsAPI";
import { Link } from "react-router-dom";

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
    <div className="container-fluid side-container">
      <div className="row side-row">
        <ListGroup as="ol" numbered>
          {posts.map((post) => (
            <ListGroup.Item variant="dark" key={post.id}>
              <Link to={`/posts/${post.id}`}>{post.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default Home;
