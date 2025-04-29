import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "https://chatting-app-backend-axdgvw5k2-ankit-84s-projects.vercel.app/api",
  withCredentials: true,
});