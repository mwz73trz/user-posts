import "../App.css";
import { ListGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import userPostsAPI from "../api/userPostsAPI";
import { Link, useSearchParams } from "react-router-dom";

const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams();
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
        <nav>
          <Form.Control
            style={{ width: "30%" }}
            placeholder="Search a post"
            value={searchParams.get("filter") || ""}
            onChange={(event) => {
              let filter = event.target.value;
              if (filter) {
                setSearchParams({ filter });
              } else {
                setSearchParams({});
              }
            }}
          />
          <p></p>
          <ListGroup as="ol" numbered>
            {posts
              .filter((post) => {
                let filter = searchParams.get("filter");
                if (!filter) return true;
                let searchTerm = post.title.toLowerCase();
                return searchTerm.startsWith(filter.toLowerCase());
              })
              .map((post) => (
                <ListGroup.Item variant="dark" key={post.id}>
                  <Link to={`/posts/${post.id}`}>{post.title}</Link>
                </ListGroup.Item>
              ))}
          </ListGroup>
        </nav>
      </div>
    </div>
  );
};

export default Home;
