import axios from "axios";

export const baseURL = "https://jsonplaceholder.typicode.com/";

const client = axios.create({ baseURL });

client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

export default client;
