import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import fetchImages from "./services/gallery-api";
import Button from "./components/Button";
import Loader from "react-loader-spinner";
import Modal from "./components/Modal";
import "./styles.css";

class App extends Component {
  state = {
    images: [],
    searchQuery: "",
    isLoading: false,
    currentPage: 1,
    showModal: false,
    largeImage: "",
    alt: "",
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

  onOpenModal = (event) => {
    this.setState((state) => ({
      showModal: !state.showModal,
      largeImage: event.target.dataset.large,
      alt: event.target.dataset.alt,
    }));
  };

  onCloseModal = () => {
    this.setState((state) => ({
      showModal: !state.showModal,
    }));
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
        <ImageGallery images={this.state.images} onClick={this.onOpenModal} />
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
        {this.state.showModal && (
          <Modal onClose={this.onCloseModal}>
            <img src={this.state.largeImage} alt={this.state.alt} />
          </Modal>
        )}
      </div>
    );
  }
}
export default App;
