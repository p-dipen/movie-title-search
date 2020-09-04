import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovieList } from "../actions";
import SearchBarInput from "../components/SearchBarInput";
class SearchBar extends Component {
  state = {
    searchInput: "",
  };
  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { searchInput } = this.state;
    const { searchMovieList } = this.props;
    if (searchInput) {
      searchMovieList(searchInput);
    }
  };
  render() {
    const { searchInput } = this.state;
    return (
      <header>
        <SearchBarInput
          submit={this.handleSubmit}
          value={searchInput}
          change={this.handleChange}
        />
      </header>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  searchMovieList: (moviename) => dispatch(searchMovieList(moviename)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
