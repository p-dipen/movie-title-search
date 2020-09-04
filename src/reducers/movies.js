import ActionTypes from "../constants/ActionTypes";
import { Record, fromJS, List } from "immutable";

const InitialState = Record({
  isLoading: false,
  moviesList: new List(),
  error: null,
});

export default function movieState(state = new InitialState(), action) {
  switch (action.type) {
    case ActionTypes.GET_MOVIE_LIST:
      return state.set("isLoading", true);
    case ActionTypes.GET_MOVIE_LIST_COMPLETED:
      return state
        .set("moviesList", fromJS(action.data))
        .set("isLoading", false);
    case ActionTypes.GET_MOVIE_LIST_ERROR:
      return state.set("error", action.data).set("isLoading", false);
    case ActionTypes.REMOVE_MOVIE_FROM_LIST:
      console.log(
        state.get("moviesList").filter((movie) => console.log(movie))
      );
      return state.set(
        "moviesList",
        state
          .get("moviesList")
          .filter((movie) => movie.get("imdbID") != action.data)
      );

    default:
      return state;
  }
}
