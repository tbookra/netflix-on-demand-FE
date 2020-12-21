import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { httpRequest } from "../../api";
import { Pricing } from "../../components";
import { useSelector } from "react-redux";
const PurchasePage = () => {
  const { currentMovie } = useSelector((state) => state.mainApp);
  const [isAddSuccessfully, setIsAddSuccessfully] = useState(false);

  const onAddMovie = async (movie_id, posterPath) => {
    try {
      const { data: isMovieAdded } = await httpRequest.post("/movie/addMovie", {
        movieId: movie_id,
        posterPath,
      });
      setIsAddSuccessfully(isMovieAdded.added);
    } catch (err) {
      console.log(err);
    }
  };

  const onBuyMembership = async () => {
    try {
      const { data: membership } = await httpRequest.post(
        "/movie/membership/buy"
      );
      setIsAddSuccessfully(membership);
    } catch (err) {
      console.log(err);
    }
  };

  return isAddSuccessfully ? (
    <Redirect to={`/movieItem/${currentMovie.id}`} />
  ) : (
    <Pricing addMovie={onAddMovie} buyMembership={onBuyMembership} currentMovie={currentMovie} />
  );
};

export default PurchasePage;
