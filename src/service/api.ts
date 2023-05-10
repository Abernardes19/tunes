import axios from "axios";

const artistApi = axios.create({
  baseURL: "https://itunes.apple.com"
});

export default artistApi;
