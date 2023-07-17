import axios from "axios";
const baseURL = "https://jsonplaceholder.typicode.com/";

const HttpService = (endpoint) => {
  return {
    GET: (endpoint) => {
      return axios
        .get(`${baseURL}${endpoint}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          return err;
        });
    },
  };
};

export default HttpService;
