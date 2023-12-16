import axios from "axios";

const instance = axios.create({
  baseURL:
    "https://burger-ae9d4-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default instance;
