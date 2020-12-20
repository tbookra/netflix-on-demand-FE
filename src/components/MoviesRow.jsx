import React, { useState, useEffect } from "react";
import { tmdb } from "../api";
import { getMovieImgByPath } from "../config/movies-config";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import {Typography, Container} from '@material-ui/core';
import { insertMovie } from "../actions/appActions";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const MoviesRow = ({ rowUrl, rowTitle }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results },
        } = await tmdb.get(rowUrl);
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [rowUrl]);

  return (
    <Container>
      <Typography variant='h6' gutterBottom display="block">{rowTitle}</Typography>
      <Container id="moviesRow">
        {movies.map((movie, index) =>
          movie ? (
            <Container key={index} className="moviesRowItem">
              <Link
                to={`/movieItem/${movie.id}`}
                onClick={() => dispatch(insertMovie(movie.id))}
              >
                <img src={getMovieImgByPath(movie.poster_path)} alt="img" />
              </Link>
            </Container>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )
        )}
      </Container>
    </Container>
  );
};

MoviesRow.propTypes = {
  rowTitle: PropTypes.string,
  rowUrl: PropTypes.string,
};

export default MoviesRow;
