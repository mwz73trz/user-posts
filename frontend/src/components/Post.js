import "../App.css";
import { Card } from "react-bootstrap";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
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
      <Card>
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Text>{post.content}</Card.Text>
          <Card.Text>{post.created_date}</Card.Text>
          <Card.Footer>
            <Link to={`/posts/${post.id}/update`}>
              <FaEdit />
            </Link>
            {"  "}
            <Link to={`/posts/${post.id}/delete`}>
              <FaTrashAlt />
            </Link>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <h1>Post Details</h1>
        {renderPost()}
      </div>
    </div>
  );
};

export default Post;
