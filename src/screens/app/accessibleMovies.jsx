import React, { useState, useEffect } from "react";
import { httpRequest } from "../../api";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Typography, Container, Button, Grid } from "@material-ui/core";
import { AccessibleMoviesGrid } from "../../components";

const AccessibleMovies = () => {
  const history = useHistory();
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
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

  if (isMember) {
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

  return (
    <Container>
      <Grid container spacing={4} wrap="wrap">
        <AccessibleMoviesGrid accessibleMovies={accessibleMovies} />
      </Grid>
    </Container>
  );
};

export default AccessibleMovies;
