import React, { useState, useEffect } from "react";
import { tmdb } from "../api";
import { getMovieImgByPath } from "../config/movies-config";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { insertMovie } from "../actions/appActions";
import { useDispatch } from "react-redux";
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
    <div>
      <h3>{rowTitle}</h3>
      <div id="moviesRow">
        {movies.map((movie, index) =>
          movie ? (
            <div key={index} className="moviesRowItem">
              <Link
                to={`/movieItem/${movie.id}`}
                onClick={() => dispatch(insertMovie(movie.id))}
              >
                <img src={getMovieImgByPath(movie.poster_path)} alt="img" />
              </Link>
            </div>
          ) : (
            <Skeleton variant="rect" width={210} height={118} />
          )
        )}
      </div>
    </div>
  );
};

export default MoviesRow;
