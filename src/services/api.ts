import axios from "axios";

const api = axios.create({
  baseURL: "https://socialmedia-fastapi-yx0y.onrender.com",
  headers: {
    Authorization: "Basic " + btoa("admin:password"),
    "Content-Type": "application/json",
  },
});

export default api;
