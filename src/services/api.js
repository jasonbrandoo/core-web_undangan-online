import axios from "axios";

const ISSERVER = typeof window === "undefined";
const API_URL = "http://localhost:8000";
let token = ``;
if (!ISSERVER) {
  token = localStorage.getItem("token");
}

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common["Authorization"] = token;

export const requestRegister = async (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/auth/register`, payload)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error.response));
  });
};

export const loginRequest = async (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/auth/login`, payload)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error.response));
  });
};

export const verify = async (payload) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`/auth/verify`)
      .then((res) => resolve(res.data))
      .catch((error) => reject(error.response));
  });
};
