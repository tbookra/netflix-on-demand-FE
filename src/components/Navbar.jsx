import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import Drawer from "./header/Drawer";
import { Link } from "react-router-dom";
import { Brightness7, Brightness3 } from "@material-ui/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    // justifyContent: "space-between",
    gridTemplateColumns: '1fr 1fr 1fr 2fr'
  },
  root2: {
    display: "grid",
    // justifyContent: "space-between",
    gridTemplateColumns: '2fr 3fr 2fr'
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
    fontSize: "0.75em",
  },
  nav: {
    marginLeft: 'calc(40% + 3vw)',
    width: "15%",
  },
  rootDiv: {
    marginBottom: 100,
  },
}));

const Navbar = ({ theme, toggleDarkMode }) => {
  const classes = useStyles();
  const { loggedIn, userName } = useSelector((state) => state.auth);
  const Switchicon =
    theme.palette.type === "dark" ? <Brightness7 /> : <Brightness3 />;
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  return (
    <div className={classes.rootDiv}>
      <AppBar position="fixed">
        <Toolbar className={isSmallScreen ? classes.root2 : classes.root}>
          <Typography variant="h6" className={classes.username} id='username'>
            {loggedIn ? "Hello " + userName.full_name : null}
          </Typography>
          {isSmallScreen ? null : (
            <IconButton
              edge="end"
              color="inherit"
              aria-label="mode"
              onClick={toggleDarkMode}
              className={classes.darkModeIcon + isSmallScreen ? classes.root2 : classes.root}
            >
              {Switchicon}
            </IconButton>
          )}

          <Link to="/" className={classes.title}>
            <Typography variant="h5">
              NETFLIX
              <Typography display="inline" className={classes.title2}>
                on
              </Typography>
              DEMAND
            </Typography>
          </Link>
          <div className={classes.nav}>
            <Drawer theme={theme} toggleDarkMode={toggleDarkMode} />
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
