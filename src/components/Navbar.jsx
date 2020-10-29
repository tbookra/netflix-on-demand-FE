import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import { useSelector} from 'react-redux';
import Drawer from './header/Drawer'
import {Link} from 'react-router-dom'
  const useStyles = makeStyles({
  root: {
      display: 'flex',
      justifyContent: 'space-between'
  },
  title: {
    color: '#d81f26',
    textDecoration: 'none',
   },
  username: {
    fontSize: '0.85em',
  },
  // nav: {
  //   flexGrow: 1,
  // },

});


const Navbar = (props) => {

  const classes = useStyles();
  const {loggedIn, userName} = useSelector(state => state.auth);
  

  
  return (
    <div >
      <AppBar position="static"  >
        <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.username}>
        {loggedIn ? <div to="/" >{"Hello " + userName}</div> : null}
          </Typography>
          <Link to='/' className={classes.title}>
            <Typography variant="h4" >
              NETFLIX
            </Typography>
          </Link>

          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

            <div className={classes.nav}>
              <Drawer/>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar 