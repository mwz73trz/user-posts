import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Post from "./components/Post";
import AddPost from "./components/AddPost";
import UpdatePosts from "./components/UpdatePosts";
import DeletePost from "./components/DeletePost";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/posts/:id/update" element={<UpdatePosts />} />
        <Route path="/posts/:id/delete" element={<DeletePost />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
