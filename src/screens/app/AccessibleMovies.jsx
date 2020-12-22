import React, { useState, useEffect } from "react";
import { httpRequest } from "../../api";
import { useHistory, Link } from "react-router-dom";
import {
  Typography,
  Container,
  Button,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import { AccessibleMoviesGrid } from "../../components";

const AccessibleMovies = () => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [isMember, setIsMember] = useState(null);
  const [accessibleMovies, setAccessibleMovies] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await httpRequest.get("/movie/getAccessibleMovies");
        if (data.isMember) return setIsMember(data.isMember);
        setAccessibleMovies(data.accessibleMovies);
        setIsLoading(false);
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
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) {
    return (
      <Container>
        <CircularProgress color="secondary" size={100} />
      </Container>
    );
  }

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

  if (!accessibleMovies.length && !isLoading) {
    return (
      <Container>
        <Typography component="h4" variant="h3">
          you have a membership
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
        <AccessibleMoviesGrid accessibleMovies={accessibleMovies} />
      </Grid>
    </Container>
  );
};

export default AccessibleMovies;
