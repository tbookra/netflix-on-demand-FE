import React from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
const NotFoundPage = () => {
  return (
    <div>
      <Typography variant="h1">Oops Error 404 Page not found</Typography>
      <Link to="/">
        <Typography variant="h1">Click here to Home Page</Typography>
      </Link>
    </div>
  );
};

export default NotFoundPage;
