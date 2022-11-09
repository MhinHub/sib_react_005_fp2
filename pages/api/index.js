import axios from "axios";

export const getProducts = async () => {
    return await axios.get(`${process.env.BASE_API_URL}/products`);
};

export const getProductDetail = async (id) => {
    return await axios.get(`${process.env.BASE_API_URL}/products/${id}`);
};

export const auth = async ({ username, password }) => {
    return await axios.post(`${process.env.BASE_API_URL}/auth/login`, {
        username,
        password
    });
};