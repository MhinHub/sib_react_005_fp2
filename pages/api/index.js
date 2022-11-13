import axios from "axios";

export const getProducts = async () => {
    return await axios.get("https://fakestoreapi.com/products");
};

export const auth = async ({ username, password }) => {
  return axios.post("https://fakestoreapi.com/auth/login", {
    username,
    password,
  });
};

// Todo: add user from API
export const users = async () => {
  return await axios.get("https://fakestoreapi.com/users");
};