import axios from "axios";

const apiKey = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/books/v1/volumes",
  params: {
    key: apiKey,
  },
});

class ApiBase {
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getBooks = (params) =>
    axiosInstance.get(this.endpoint, { params }).then((res) => res.data);

  get = () =>
    axiosInstance
      .get(this.endpoint, {
        params: {
          filter: true,
        },
      })
      .then((res) => res.data);
}

export default ApiBase;