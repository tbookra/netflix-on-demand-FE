import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { tmdb } from "../api";
import { youtubeBaseUrl, getMovieVideo } from "../config/movies-config";
import { CircularProgress,Typography, Container } from "@material-ui/core";
import { useSelector } from "react-redux";

const MovieItemData = () => {
  const { currentMovie } = useSelector((state) => state.mainApp);
  const [isVideoExists, setIsVideoExists] = useState(null);
  const [videoKey, setVideoKey] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { results },
        } = await tmdb.get(getMovieVideo(currentMovie.id));
        if (!results.length) return setIsVideoExists(false);
        setIsVideoExists(true);
        const [trailer] = results.filter((item) => item.type === "Trailer");
        setVideoKey(trailer.key);
      } catch (err) {
        setIsVideoExists(false);
      }
    })();
  }, [currentMovie]);

  if (isVideoExists !== null && !isVideoExists) {
    return (
      <Container>
        <Typography variant='h3' gutterBottom>{currentMovie.original_title}</Typography>
        <Typography variant='body1'>Sorry this Movie has no video to share</Typography>
      </Container>
    );
  }

  return (
    <Container className="movieItemDataRoot">
      <h1>{currentMovie.original_title}</h1>

      {videoKey ? (
        <Container className="player-wrapper">
          <ReactPlayer
            className="react-player"
            url={youtubeBaseUrl(videoKey)}
            width="50%"
            height="50%"
            controls
          />
        </Container>
      ) : (
        <Container className="loading">
          <CircularProgress size={100} />
        </Container>
      )}
    </Container>
  );
};

export default MovieItemData;
