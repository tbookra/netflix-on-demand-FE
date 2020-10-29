import React from 'react';
import {AppBar, Toolbar, Typography, makeStyles} from '@material-ui/core'
import { useSelector} from 'react-redux';
import Drawer from './header/Drawer'
import {Link} from 'react-router-dom'
  const useStyles = makeStyles({
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
              <Drawer/>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar 