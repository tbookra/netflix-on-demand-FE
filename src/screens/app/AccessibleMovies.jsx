import React, { useState, useEffect } from "react";
import { httpRequest } from "../../api";
import { useHistory, Link } from "react-router-dom";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import { AccessibleMoviesGrid, Indicator } from "../../components";

const AccessibleMovies = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isMember, setIsMember] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [accessibleMovies, setAccessibleMovies] = useState({
    currentMovies: [],
    hasNextPage: true,
    hasPrevPage: false,
  });

  useEffect(() => {
    setIsLoading(true);

    httpRequest
      .get(`/movie/getAccessibleMovies/${currentPage}`)
      .then((result) => {
        console.log(result);
        if (result.data.isMember) return setIsMember(result.data.isMember);
        setAccessibleMovies(result.data);
      })
      .catch((err) => console.log(err));

    setIsLoading(false);
  }, [currentPage]);

  const handleCancelMembership = async () => {
    try {
      const { data: membership } = await httpRequest.post(
        "/movie/membership/cancel"
      );
      setIsMember(membership);
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePagination = (diraction) => {
    setCurrentPage((current) =>
      diraction === "up" ? (current += 1) : (current -= 1)
    );
  };
  if (isLoading) return <Indicator />;

  if (isMember && !isLoading) {
    return (
      <Container>
        <Typography component="h4" variant="h3">
          you have a membership
        </Typography>
        <Typography component="h5" variant="h4">
          its mean you have access to all of our movies
        </Typography>
        <Button onClick={handleCancelMembership}>cancel membership</Button>
      </Container>
    );
  }
  if (!accessibleMovies.currentMovies.length && !isLoading) {
    return (
      <Container>
        <Typography component="h4" variant="h3">
          you dont have a membership
        </Typography>
        <Typography component="h5" variant="h4">
          <Link to="/">Start buy movies!</Link>
        </Typography>
      </Container>
    );
  }

  return (
    <Container>
      <Grid container spacing={4} wrap="wrap">
        <AccessibleMoviesGrid
          accessibleMovies={accessibleMovies}
          handlePagination={handlePagination}
        />
      </Grid>
    </Container>
  );
};

export default AccessibleMovies;
