import React from "react";
import {Fab} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import PropTypes from "prop-types";

const PageButtons = ({ handlePageMove }) => {
  return (
    <div className="page_buttons">
      <Fab
        variant="extended"
        color="primary"
        onClick={() => handlePageMove("Down")}
      >
        <ArrowBackIcon />
        Page Down
      </Fab>

      <Fab
        variant="extended"
        color="primary"
        onClick={() => handlePageMove("Up")}
      >
        <ArrowForwardIcon />
        Page Up
      </Fab>
    </div>
  );
};

PageButtons.propTypes = { 
  handlePageMove: PropTypes.func,
};

export default PageButtons;
