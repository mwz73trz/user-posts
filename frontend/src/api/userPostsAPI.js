import axios from "axios";

const BASE_URL = "http://localhost:8000/api/";

const userPostsAPI = {};

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall();
    return response.data ? response.data : { message: "success" };
  } catch (e) {
    console.error("-- tryCatchFetch ERROR:", e.response ? e.response.data : e);
    return null;
  }
};

userPostsAPI.getPosts = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}posts/`));
};

userPostsAPI.getSinglePost = async (postId) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}posts/${postId}`));
};

userPostsAPI.addPost = async (postData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}posts/`, postData));
};

userPostsAPI.updatePost = async (postId, postData) => {
  return await tryCatchFetch(() =>
    axios.put(`${BASE_URL}posts/${postId}/`, postData)
  );
};

userPostsAPI.deletePost = async (postId) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}posts/${postId}/`));
};

export default userPostsAPI;
