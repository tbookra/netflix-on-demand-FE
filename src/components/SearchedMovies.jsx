import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { PageButtons } from "./";
import { tmdb } from "../api";
import { getMovieImgByPath, getSearchMovies } from "../config/movies-config";
import Skeleton from "@material-ui/lab/Skeleton";
import { insertMovie } from "../actions/appActions";
import { useDispatch } from "react-redux";

const SearchedMovies = ({ searchString, page, handlePageMove }) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const url = getSearchMovies(searchString["searchString"], page);
        if (searchString) {
          const {
            data: { results },
          } = await tmdb.get(url);
          const filterResult = results.filter(
            (movie) => movie.poster_path != null
          );
          setMovies(filterResult);
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [searchString, page]);

  return (
    <Container>
      <Container maxWidth="lg">
        {!searchString || (movies.length < 20 && page === 1) ? (
          ""
        ) : (
          <PageButtons handlePageMove={handlePageMove} />
        )}
        {movies.length > 0 ? (
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
        ) : (
          <Skeleton
            variant="rect"
            width={400}
            height={500}
            style={{ backgroundColor: "inherit" }}
          />
        )}

        {!searchString || (movies.length < 20 && page === 1) ? (
          ""
        ) : (
          <PageButtons handlePageMove={handlePageMove} />
        )}
      </Container>
    </Container>
  );
};

export default SearchedMovies;
