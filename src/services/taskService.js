import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const fetchTasks = async () => {
  const response = await axios.get(`${BASE_URL}/todos?limit=150`);
  return response.data.todos;
};