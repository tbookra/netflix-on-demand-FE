import React from "react";
import { Container, CircularProgress } from "@material-ui/core";
const Indicator = () => {
  return (
    <Container>
      <CircularProgress color="secondary" size={100} />
    </Container>
  );
};

export default Indicator;
