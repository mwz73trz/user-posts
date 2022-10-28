import "../App.css";
import { useNavigate } from "react-router-dom";
import userPostsAPI from "../api/userPostsAPI";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignUp = async (evt) => {
    evt.preventDefault();

    let signupData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value,
    };

    const data = await userPostsAPI.signup(signupData);
    if (data) {
      navigate("/login");
    }
  };

  return (
    <div className="container-fluid side-container">
      <div className="row side-row">
        <h2>Sign Up Page</h2>
        <br />
        <form onSubmit={handleSignUp} method="POST">
          <label>Username: </label>
          <input type="text" name="username" placeholder="Enter a Username" />
          <br />
          <label>Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Enter a Password"
          />
          <br />
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
