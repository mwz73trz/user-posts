import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import userPostsAPI from "../api/userPostsAPI";

const AddPost = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const postData = {
      title: e.target.elements["title"].value,
      content: e.target.elements["content"].value,
    };

    const data = await userPostsAPI.addPost(postData);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <h1>New Post Form</h1>
        <Form onSubmit={handleSubmit} style={{ width: "75%" }}>
          <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title" required placeholder="" />
          </Form.Group>
          <Form.Group controlId="content">
            <Form.Label>Content</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              name="content"
              required
              placeholder=""
            />
          </Form.Group>
          <p></p>
          <Button value="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddPost;
