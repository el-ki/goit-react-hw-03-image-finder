import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import fetchImages from "./services/gallery-api";
import Button from "./components/Button";
import Loader from "react-loader-spinner";
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
    if (this.state.currentPage > 2) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }

  onChangeInput = (input) => {
    this.setState({
      searchQuery: input,
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
      .catch((error) => `${error}`)
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.onChangeInput} />
        <ImageGallery images={this.state.images} />
        {this.state.isLoading && (
          <Loader
            className="Loader"
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} //3 secs
          />
        )}
        {this.state.searchQuery && !this.state.isLoading && (
          <Button onClick={this.getImages} />
        )}
      </div>
    );
  }
}
export default App;
