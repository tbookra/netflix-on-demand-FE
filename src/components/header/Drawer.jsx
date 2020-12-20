import React, { useState } from "react";
import { SwipeableDrawer, IconButton, makeStyles } from "@material-ui/core";
import { Menu as MenuIcon } from "@material-ui/icons";
import DrawerList from "./DrawerList";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },

  menuButton: {
    marginRight: theme.spacing(2),
  },
  fullList: {
    width: "auto",
  },
}));

const Drawer = (props) => {
  const classes = useStyles();
  const [isDrawerOpen, setIsDraweropen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDraweropen(open);
  };

  return (
    <div>
      <IconButton
        edge="start"
        className={classes.menuButton}
        area-label="menu"
        onClick={toggleDrawer(true)}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="right"
        open={isDrawerOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <DrawerList
          toggleDrawer={toggleDrawer}
          theme={props.theme}
          toggleDarkMode={props.toggleDarkMode}
        />
      </SwipeableDrawer>
    </div>
  );
};

Drawer.propTypes = {
  theme: PropTypes.object,
  toggleDarkMode: PropTypes.func,
}

export default Drawer;
