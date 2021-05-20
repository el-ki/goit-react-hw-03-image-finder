import axios from "axios";
const API_KEY = "20763996-832cb39490986f382e23fb6d5";

const fetchImages = ({ searchQuery = "", currentPage = 1 }) => {
  return axios
    .get(
      `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((response) => response.data.hits);
};

export default fetchImages;
