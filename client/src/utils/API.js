// dependencies
import axios from "axios";

export default {
  // get images from server
  getImages: () => {
    return axios.get("api/images");
  }
};
