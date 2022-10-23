import axios from "axios";

function Axios() {
  axios.create({
    baseURL: "http://localhost:3001",
  });
}

export default Axios;