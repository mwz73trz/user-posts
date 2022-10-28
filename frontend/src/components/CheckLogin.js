import { Link } from "react-router-dom";

const CheckLogin = (props) => {
  if (props.username === "") {
    return (
      <div className="container-fluid side-container">
        <div className="row side-row">
          <p>
            You are not logged in. Please either <Link to="/login">Login</Link>{" "}
            or <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">{props.actualPage()}</div>
    </div>
  );
};

export default CheckLogin;
