import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { PageButtons } from "./";
import { tmdb } from "../api";
import { getMovieImgByPath } from "../config/movies-config";
import Skeleton from "@material-ui/lab/Skeleton";
import { insertMovie } from "../actions/appActions";
import { useDispatch } from "react-redux";
import * as appTypes from "../actions/appTypes";
import PropTypes from "prop-types";


const MovieSection = ({ sectionUrl, section, handlePageMove }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch({ type: appTypes.CLEAN_STATE });
        const {
          data: { results },
        } = await tmdb.get(sectionUrl);
        setMovies(results);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [sectionUrl, dispatch]);

  return (
    <Container>
      <Container maxWidth="lg">
        <PageButtons section={section} handlePageMove={handlePageMove} />
        <Container id="moviesSection">
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
        <PageButtons section={section} handlePageMove={handlePageMove} />
      </Container>
    </Container>
  );
};

MovieSection.prototype = {
  section: PropTypes.string,
  sectionUrl: PropTypes.string,
  handlePageMove: PropTypes.func,
}

export default MovieSection;
