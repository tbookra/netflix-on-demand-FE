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
    width: '15%',
    fontSize: '0.85em',
  },
  nav: {
    width: '15%',
  },
  rootDiv:{
    marginBottom:100
  }

});


const Navbar = (props) => {

  const classes = useStyles();
  const {loggedIn, userName} = useSelector(state => state.auth);
  

  
  return (
    <div className={classes.rootDiv} >
      <AppBar position="fixed"  >
        <Toolbar className={classes.root}>
        <Typography variant="h6" className={classes.username}>
        {loggedIn ? "Hello " + userName : null}
          </Typography>
          <Link to='/' className={classes.title}>
            <Typography variant="h4" >
              NETFLIX
            </Typography>
          </Link>
            <div className={classes.nav}>
              <Drawer/>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar 