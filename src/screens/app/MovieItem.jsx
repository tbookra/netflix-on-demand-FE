import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { httpRequest } from "../../api";
import { MovieItemData } from "../../components";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setChangePassword } from "../../actions/changePasswordAction";

const MovieItem = () => {
  const dispatch = useDispatch();
  const { currentMovie, movieFetchingError } = useSelector(
    (state) => state.mainApp
  );
  const [isAccessible, setIsAccessible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!currentMovie || !Object.keys(currentMovie).length) {
      return setIsLoading(true);
    }
    (async () => {
      try {
        const {
          data: { isMovieAccessible },
        } = await httpRequest.get(
          `/movie/checkIfMovieAccessible/${currentMovie.id}`
        );
        if (isMovieAccessible === "password")
          await dispatch(setChangePassword(true));
        setIsAccessible(isMovieAccessible);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [currentMovie, isAccessible, dispatch]);

  if (isLoading) {
    return !movieFetchingError ? (
      <CircularProgress />
    ) : (
      <h3>{movieFetchingError}</h3>
    );
  }

  return isAccessible ? (
    <div>
      <MovieItemData />
    </div>
  ) : (
    <Redirect to={`/purchasePage/${currentMovie.id}`} />
  );
};

export default MovieItem;
