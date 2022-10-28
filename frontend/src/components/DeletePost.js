import "../App.css";
import { useParams, useNavigate } from "react-router-dom";
import userPostsAPI from "../api/userPostsAPI";
import { Alert, Button } from "react-bootstrap";

const DeletePost = () => {
  const params = useParams();
  const navigate = useNavigate();

  const cancelDelete = () => {
    navigate(-1);
  };

  const deletePost = async () => {
    const data = await userPostsAPI.deletePost(params.id);
    if (data) {
      navigate("/");
    }
  };

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <h1>Delete Post</h1>
        <Alert variant="danger">
          Are you sure you want to delete this post?
        </Alert>
        <Button variant="danger" type="submit" onClick={deletePost}>
          Yes
        </Button>
        <Button variant="secondary" type="submit" onClick={cancelDelete}>
          No
        </Button>
      </div>
    </div>
  );
};

export default DeletePost;
