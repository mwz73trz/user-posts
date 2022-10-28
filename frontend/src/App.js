import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import CheckLogin from "./components/CheckLogin";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import UpdatePosts from "./components/UpdatePosts";
import DeletePost from "./components/DeletePost";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <Navigation username={username} setUsername={setUsername} />
      <Routes>
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          exact
          path="/"
          element={
            <CheckLogin username={username} actualPage={() => <Home />} />
          }
        />
        <Route
          path="/posts/:id"
          element={
            <CheckLogin username={username} actualPage={() => <Post />} />
          }
        />
        <Route
          path="/posts/add"
          element={
            <CheckLogin username={username} actualPage={() => <AddPost />} />
          }
        />
        <Route
          path="/posts/:id/update"
          element={
            <CheckLogin
              username={username}
              actualPage={() => <UpdatePosts />}
            />
          }
        />
        <Route
          path="/posts/:id/delete"
          element={
            <CheckLogin username={username} actualPage={() => <DeletePost />} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
