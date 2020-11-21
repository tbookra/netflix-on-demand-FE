import React, { useState, useEffect } from "react";
import { httpRequest, tmdb } from "../../api";
import { getMovie, getMovieImgByPath } from "../../config/movies-config";
import { Link } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import { insertMovie } from "../../actions/appActions";
import { useDispatch } from "react-redux";
const AccessibleMovies = () => {
  const dispatch = useDispatch();
  const [isMember, setIsMember] = useState();
  const [accessibleMovies, setAccessibleMovies] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await httpRequest.get("/movie/getAccessibleMovies");
        if (data.isMember) return setIsMember(data.isMember);
        setAccessibleMovies(data.accessibleMovies);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleCancelMembership = async () => {
    try {
      const { data: membership } = await httpRequest.post(
        "/movie/membership/cancel"
      );
      setIsMember(membership);
    } catch (err) {
      console.log(err);
    }
  };

  const getMovieImgById = (movie_id) => {
    tmdb
      .get(getMovie(movie_id))
      .then(({ data }) => {
        const imgPath = `https://image.tmdb.org/t/p/w185${data.poster_path}`;
        return imgPath;
      })
      .catch((err) => console.log(err));
  };

  if (isMember) {
    return (
      <div>
        <h3>you have a membership</h3>
        <h5>its mean you have access to all of our movies</h5>
        <button onClick={handleCancelMembership}>cancel membership</button>
      </div>
    );
  }

  return (
    <div>
      {accessibleMovies.map((movie, index) =>
        movie ? (
          <div key={index} className="moviesRowItem">
            <Link
              to={`/movieItem/${movie.movieId}`}
              onClick={() => dispatch(insertMovie(movie.movieId))}
            >
              {/* check why img is not seen */}
              <img src={getMovieImgById(movie.movieId)} alt="img" />
            </Link>
          </div>
        ) : (
          <Skeleton variant="rect" width={210} height={118} />
        )
      )}
    </div>
  );
};

export default AccessibleMovies;
