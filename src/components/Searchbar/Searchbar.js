import { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleInputChange = (event) => {
    const value = event.currentTarget.value;
    this.setState({ query: value });
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: "" });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleOnSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.input}
            onChange={this.handleInputChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
