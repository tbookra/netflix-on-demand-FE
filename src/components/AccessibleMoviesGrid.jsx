import React from "react";
import { getMovieImgByPath } from "../config/movies-config";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { insertMovie } from "../actions/appActions";
import { useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import PropTypes from "prop-types";
const AccessibleMoviesGrid = ({ accessibleMovies }) => {
  const dispatch = useDispatch();

  return accessibleMovies.map((movie, index) =>
    movie ? (
      <Grid item xs={12} sm={4} md={3} key={index} className="moviesRowItem">
        <Link
          to={`/movieItem/${movie.movieId}`}
          onClick={() => dispatch(insertMovie(movie.movieId))}
        >
          <img src={getMovieImgByPath(movie.posterPath)} alt="img" />
        </Link>
      </Grid>
    ) : (
      <Skeleton variant="rect" width={210} height={118} />
    )
  );
};

AccessibleMoviesGrid.propTypes = {
  accessibleMovies: PropTypes.array,
};

export default AccessibleMoviesGrid;
