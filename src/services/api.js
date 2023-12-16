import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/questions';

export const fetchQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/questionsOfDay`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
