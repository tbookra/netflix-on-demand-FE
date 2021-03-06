import React from "react";
import { getMovieImgByPath } from "../config/movies-config";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { insertMovie } from "../actions/appActions";
import { useDispatch } from "react-redux";
import { Button, Container, Grid } from "@material-ui/core";
import PropTypes from "prop-types";

const AccessibleMoviesGrid = ({ accessibleMovies, handlePagination }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <Container style={{ margin: 20 }}>
        <Button
          style={{ marginRight: 10, marginLeft: 10 }}
          onClick={() => {
            if (accessibleMovies.hasPrevPage) {
              handlePagination("down");
            }
          }}
        >
          Prev Page
        </Button>
        <Button
          style={{ marginRight: 10, marginLeft: 10 }}
          onClick={() => {
            if (accessibleMovies.hasNextPage) {
              handlePagination("up");
            }
          }}
        >
          Next Page
        </Button>
      </Container>
      <Grid container>
        {accessibleMovies.currentMovies.map((movie, index) =>
          movie ? (
            <Grid
              item
              xs={12}
              sm={4}
              md={3}
              key={index}
              className="moviesRowItem"
            >
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
        )}
      </Grid>
    </Container>
  );
};

AccessibleMoviesGrid.propTypes = {
  accessibleMovies: PropTypes.shape({
    currentMovies: PropTypes.array,
    hasNextPage: PropTypes.bool,
    hasPrevPage: PropTypes.bool,
  }),
  handlePagination: PropTypes.func,
};

export default AccessibleMoviesGrid;
