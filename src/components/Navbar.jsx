import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {  NavLink } from "react-router-dom";
import { useSelector, useDispatch  } from 'react-redux';
import * as authTypes from '../actions/authTypes'
import {removeToken} from '../api/tokenHandler'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
});


const Navbar = (props) => {

  const classes = useStyles();
  const {loggedIn, userName} = useSelector(state => state.auth);
  

  
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
        <Typography variant="h6" className={classes.title}>
        {loggedIn ? <div to="/" >{"Hello " + userName}</div> : null}
          </Typography>
          <Link to='/' className={classes.title}>
            <Typography variant="h6" >
              Netflix
            </Typography>
          </Link>
            <div>

              <IconButton
               edge = "start"
               className={classes.menuButton}
               area-label="menu"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><NavLink to="/">HOME</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/MovieSection/popular">Popular Movies</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/MovieSection/top_rated">Top Rated</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/MovieSection/trending">Trending</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/MovieSection/discover">Netflix Originals</NavLink></MenuItem>
                <MenuItem onClick={handleClose}><NavLink to="/MovieSection/action">Action Movies</NavLink></MenuItem>
                <MenuItem onClick={handleClose}>{loggedIn ? <NavLink to="/Login" onClick={onLogout}>Logout</NavLink> : <NavLink to="/Login" >Login</NavLink>}</MenuItem>               
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar 