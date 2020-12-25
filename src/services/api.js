import axios from "axios";

const API_URL = "http://localhost:8000";

export const requestRegister = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
};
