import axios from "axios";

function Base() {
  axios.create({
    baseURL: "http://localhost:3001",
  });
}

export default Base;