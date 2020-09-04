import ActionTypes from "../constants/ActionTypes";

const getMovieList = () => ({
  type: ActionTypes.GET_MOVIE_LIST,
});

const getMovieListCompleted = (data) => ({
  type: ActionTypes.GET_MOVIE_LIST_COMPLETED,
  data,
});

const getMovieListError = (data) => ({
  type: ActionTypes.GET_MOVIE_LIST_ERROR,
  data,
});

export const removeMovieFromList = (data) => ({
  type: ActionTypes.REMOVE_MOVIE_FROM_LIST,
  data,
});

export const searchMovieList = (substr) => {
  return (dispatch) => {
    dispatch(getMovieList());
    let movies = [];
    let url =
      "https://jsonmock.hackerrank.com/api/movies/search/?Title=" + substr;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        movies = [...data.data, ...movies];
        let totPages = data.total_pages;
        if (totPages > 1) {
          for (let i = 2; i <= totPages; i++) {
            let newPage = i;
            let url1 =
              "https://jsonmock.hackerrank.com/api/movies/search/?Title=" +
              substr +
              "&page=" +
              newPage;
            fetch(url1)
              .then((response) => response.json())
              .then((dataPage) => {
                movies = [...dataPage.data, ...movies];
                if (totPages === i) {
                  dispatch(getMovieListCompleted(movies));
                }
              })
              .catch((error) => {
                console.log(error);
                dispatch(getMovieListError(error));
              });
          }
        } else {
          dispatch(getMovieListCompleted(movies));
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getMovieListError(error));
      });
  };
};
