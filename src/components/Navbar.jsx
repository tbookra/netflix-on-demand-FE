import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
} from "@material-ui/core";
import Drawer from "./header/Drawer";
import { Link } from "react-router-dom";
import { Brightness7, Brightness3 } from "@material-ui/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    color: "#d81f26",
    textDecoration: "none",
  },
  title2: {
    color: "white",
    textDecoration: "none",
  },
  username: {
    width: "15%",
    fontSize: "0.85em",
  },
  nav: {
    width: "15%",
  },
  rootDiv: {
    marginBottom: 100,
  },
});

const Navbar = (props) => {
  const classes = useStyles();
  const { loggedIn, userName } = useSelector((state) => state.auth);
  const Switchicon =
    props.theme.palette.type === "dark" ? <Brightness7 /> : <Brightness3 />;

  return (
    <div className={classes.rootDiv}>
      <AppBar position="fixed">
        <Toolbar className={classes.root}>
          <Typography variant="h6" className={classes.username}>
            {loggedIn ? "Hello " + userName.full_name : null}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={props.toggleDarkMode}
          >
            {Switchicon}
          </IconButton>
          <Link to="/" className={classes.title}>
            <Typography variant="h5">
              NETFLIX
              <Typography
                variant="h5"
                display="inline"
                className={classes.title2}
              >
                on
              </Typography>
              DEMAND
            </Typography>
          </Link>
          <div className={classes.nav}>
            <Drawer />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  theme: PropTypes.object,
  toggleDarkMode: PropTypes.func,
};

export default Navbar;
