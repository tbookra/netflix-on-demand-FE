import React from "react";
import clsx from "clsx";
import {
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Typography,
  Container,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import {
  Search as SearchIcon,
  LocalMovies as LocalMoviesIcon,
  ExitToApp as LogoutIcon,
  VpnKey as LoginIcon,
  Brightness7,
  Brightness3,
} from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import { HomeIcon } from "../svgIcons";
import * as authTypes from "../../actions/authTypes";
import * as appTypes from "../../actions/appTypes";
import { removeToken } from "../../api/tokenHandler";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  dividerTitle: {
    color: "grey",
    fontWeight: "bolder",
    marginTop: "10%",
    textDecoration: "underline",
    marginLeft: "20%",
    width: "auto",
  },
  link: {
    textDecoration: "none",
  },
  linkText: {
    color: theme.palette.type === "light" ? "#000" : "#FFF",
  },
}));

const DrawerList = ({ toggleDrawer, theme, toggleDarkMode }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loggedIn } = useSelector((state) => state.auth);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("xs"));

  const onLogout = () => {
    dispatch({ type: authTypes.SET_LOGOUT });
    dispatch({ type: appTypes.CLEAN_STATE });
    removeToken();
  };

  const Switchicon =
    theme.palette.type === "dark" ? <Brightness7 /> : <Brightness3 />;

  return (
    <Container
      className={clsx(classes.list)}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {isSmallScreen ? (
          <IconButton
            edge="end"
            color="inherit"
            aria-label="mode"
            onClick={toggleDarkMode}
            className={classes.darkModeIcon}
          >
            {Switchicon}
          </IconButton>
        ) : null}
        <Link to={loggedIn ? "/" : "/Login"} className={classes.link}>
          <ListItem button onClick={loggedIn ? onLogout : undefined}>
            <ListItemIcon>
              {loggedIn ? <LogoutIcon /> : <LoginIcon />}
            </ListItemIcon>
            <ListItemText
              primary={loggedIn ? "Logout" : "Login"}
              className={classes.linkText}
            />
          </ListItem>
        </Link>
        <Link to="/" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={"HOME"} className={classes.linkText} />
          </ListItem>
        </Link>
        {loggedIn ? (
          <Link to="/accessibleMovies" className={classes.link}>
            <ListItem button>
              <ListItemIcon>
                <LocalMoviesIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Accessible Movies"}
                className={classes.linkText}
              />
            </ListItem>
          </Link>
        ) : null}
      </List>
      <Divider />

      <List>
        <Link to="/SearchPage" className={classes.link}>
          <ListItem button>
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText primary={"Search"} className={classes.linkText} />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <Typography className={clsx(classes.dividerTitle)}>
        Netflix Sections:
      </Typography>
      <List>
        <Link to={"/MovieSection/popular"} className={classes.link}>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText
              primary={"Most Popular"}
              className={classes.linkText}
            />
          </ListItem>
        </Link>
        <Link to={"/MovieSection/top_rated"} className={classes.link}>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Top Rated"} className={classes.linkText} />
          </ListItem>
        </Link>
        <Link to={"/MovieSection/trending"} className={classes.link}>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={"Trending"} className={classes.linkText} />
          </ListItem>
        </Link>
        <Link to={"/MovieSection/discover"} className={classes.link}>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText
              primary={"Netflix Originals"}
              className={classes.linkText}
            />
          </ListItem>
        </Link>
        <Link to={"/MovieSection/action"} className={classes.link}>
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText
              primary={"Action Movies"}
              className={classes.linkText}
            />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <Link to={"/SignoutPage"} className={classes.link}>
        <ListItem button>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={"DELETE"} className={classes.linkText} />
        </ListItem>
      </Link>
    </Container>
  );
};

DrawerList.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default DrawerList;
