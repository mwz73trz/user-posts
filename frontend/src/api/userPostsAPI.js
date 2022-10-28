import axios from "axios";
import apiHelpers from "./apiHelpers";

const BASE_URL = "http://localhost:8000/api/";

const userPostsAPI = {};

userPostsAPI.login = async (loginData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}login/`, loginData, apiHelpers.getCsrfConfig())
  );
};

userPostsAPI.logout = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}logout/`, null, apiHelpers.getCsrfConfig())
  );
};

userPostsAPI.getPosts = async () => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}posts/`, apiHelpers.getCsrfConfig())
  );
};

apiHelpers.signup = async (signupData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}users/`, signupData, apiHelpers.getCsrfConfig())
  );
};

userPostsAPI.getSinglePost = async (postId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.get(`${BASE_URL}posts/${postId}`, apiHelpers.getCsrfConfig())
  );
};

userPostsAPI.addPost = async (postData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.post(`${BASE_URL}posts/`, postData, apiHelpers.getCsrfConfig())
  );
};

userPostsAPI.updatePost = async (postId, postData) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.put(
      `${BASE_URL}posts/${postId}/`,
      postData,
      apiHelpers.getCsrfConfig()
    )
  );
};

userPostsAPI.deletePost = async (postId) => {
  return await apiHelpers.tryCatchFetch(() =>
    axios.delete(`${BASE_URL}posts/${postId}/`, apiHelpers.getCsrfConfig())
  );
};

export default userPostsAPI;
