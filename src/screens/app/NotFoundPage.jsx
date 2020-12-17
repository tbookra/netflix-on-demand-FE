import React from "react";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div>
      <h1>Oops Error 404 Page not found</h1>
      <Link to="/">
        <h1>Click here to Home Page</h1>
      </Link>
    </div>
  );
};

export default NotFoundPage;
