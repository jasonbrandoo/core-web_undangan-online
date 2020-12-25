import axios from 'axios';

const requestRegister = async (payload) => {
  try {
    const response = await axios.post(
      `${process.env.API_URL}/auth/register`,
      payload
    );
    return response.data;
  } catch (error) {
    return error.response;
  }
};

export default requestRegister;
