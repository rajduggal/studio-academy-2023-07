import axios from "axios";

const HttpService = () => {
  const headers = {
    AuthToken: "ABC",
  };

  const baseURL = "https://jsonplaceholder.typicode.com/";

  return {
    GET: (endpoint) => {
      return axios
        .get(`${baseURL}${endpoint}`, {
          headers: headers,
        })
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    POST: (url, body) => {
      axios
        .post(url, body)
        .then((response) => {
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    // GET, POST, PUT, UPDATE, DELETE
  };
};

export default HttpService;
