import React, { Component } from "react";
import { connect } from "react-redux";
import Table from "../components/Table";
import Loader from "../components/Loader";
import styled from "styled-components";
import { removeMovieFromList } from "../actions";
const Container = styled.div`
  display: flex;
  margin: 0 auto;
  margin-top: 40px;
`;
class MovieTable extends Component {
  render() {
    const { isLoading, moviesList, error, removeMovieFromList } = this.props;
    return (
      <Container>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <p>{error.message}</p>
        ) : (
          moviesList && (
            <Table moviesList={moviesList} remove={removeMovieFromList} />
          )
        )}
        <p>{error}</p>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.getIn(["movies", "isLoading"]),
  moviesList: state.getIn(["movies", "moviesList"]).toJS(),
  error: state.getIn(["movies", "error"]),
});

const mapDispatchToProps = (dispatch) => ({
  removeMovieFromList: (imdbID) => dispatch(removeMovieFromList(imdbID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieTable);
