import * as appTypes from "./appTypes";
import { tmdb } from "../api";
import { getMovie } from "../config/movies-config";
const addMovie = (movieData) => {
  return {
    type: appTypes.INSERT_MOVIE,
    payload: movieData,
  };
};

export const insertMovie = (movieId) => async (dispatch) => {
  try {
    const {
      data: { id, poster_path, original_title, overview, release_date },
    } = await tmdb.get(getMovie(movieId));
    const movieData = {
      id,
      original_title,
      overview,
      poster_path,
      release_date,
    };
    dispatch(addMovie(movieData));
  } catch (err) {
    dispatch({
      type: appTypes.MOVIE_FETCH_ERROR,
      payload: "The resource you requested could not be found.",
    });
  }
};
