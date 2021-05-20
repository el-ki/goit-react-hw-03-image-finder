import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import fetchImages from "./services/gallery-api";
import "./styles.css";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    isLoading: false,
    currentPage: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.getImages();
    }
  }

  onChangeInput = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    });
  };

  getImages = () => {
    const { searchQuery, currentPage } = this.state;
    const options = { searchQuery, currentPage };
    this.setState({ isLoading: true });
    fetchImages(options)
      .then((response) => {
        this.setState((prevState) => ({
          images: [...prevState.images, ...response],
          currentPage: prevState.currentPage + 1,
        }));
      })
      .catch((error) => `${error}`);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeInput} />
        <ImageGallery images={this.state.images} />
      </div>
    );
  }
}
export default App;
