import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:5001",
  timeout: 1000,
  headers: { "Content-Type": "text/plain" },
});

export function GetUsers() {
  return axios.get("https://jsonplaceholder.typicode.com/users");
}

export function AddUser(user) {
  console.log("saveUser");

  return axiosInstance.post("/weatherforecast", user);
}

export function saveUser(user) {
  return axiosInstance.post("/weatherforecast", user);
}
