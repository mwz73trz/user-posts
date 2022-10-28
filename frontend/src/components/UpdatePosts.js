import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import userPostAPI from "../api/userPostsAPI";
import { Form, Button } from "react-bootstrap";

const UpdatePosts = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  const loadPost = async () => {
    const data = await userPostAPI.getSinglePost(params.id);
    setPost(data);
  };

  useEffect(() => {
    loadPost();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: e.target.elements["title"].value,
      content: e.target.elements["content"].value,
    };

    const data = await userPostAPI.updatePost(params.id, postData);
    setPost(data);
    navigate(`/posts/${params.id}`);
  };

  const renderPost = () => {
    if (!post) {
      return null;
    }

    return (
      <Form onSubmit={handleSubmit} method="PUT" style={{ width: "75%" }}>
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" defaultValue={post.title} />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            type="text"
            name="content"
            defaultValue={post.content}
          />
        </Form.Group>
        <p></p>
        <Button value="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  };

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <h1>Edit Post Form</h1>
        {renderPost()}
      </div>
    </div>
  );
};

export default UpdatePosts;
