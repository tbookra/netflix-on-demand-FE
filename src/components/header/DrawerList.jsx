import React from 'react'
import clsx from 'clsx';
import {List, Divider, ListItem, ListItemIcon, ListItemText, makeStyles, Typography} from '@material-ui/core'
import {MoveToInbox as InboxIcon, Mail as MailIcon} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { useSelector, useDispatch  } from 'react-redux';
import {HomeIcon} from '../svgIcons';
import * as authTypes from '../../actions/authTypes'
import {removeToken} from '../../api/tokenHandler'
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  dividerTitle:{
// color: '#E50914',
color: 'grey',
fontWeight: 'bolder',
marginTop: '10%',
textDecoration: 'underline',
marginLeft: '20%',
width: 'auto',
  },
});

const DrawerList = ({toggleDrawer}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const {loggedIn} = useSelector(state => state.auth);
  
    const onLogout = () => {
        console.log('on logout')
      dispatch({type:authTypes.SET_LOGOUT}) 
      removeToken();   
    }

      return (
          <div
              className={clsx(classes.list)}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
          >
              <List>
                <Link to='/'>
                    <ListItem button >
                        <ListItemIcon> <HomeIcon  /> </ListItemIcon>
                        <ListItemText primary={'HOME'} />
                    </ListItem>   
                </Link>
              </List>
              <Divider />

              <List>
                <Link to={'/SearchPage'}>
                    <ListItem button >
                        <ListItemIcon><SearchIcon /> </ListItemIcon>
                        <ListItemText primary={'Search'} />
                    </ListItem>   
                </Link>
              </List>
              <Divider />
                    <Typography className={clsx(classes.dividerTitle)}>Netflix Sections:</Typography>
               <List>
                   <Link to={"/MovieSection/popular"}>
                    <ListItem button >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={'Most Popular'} />
                    </ListItem>   
                </Link>
                 <Link to={"/MovieSection/top_rated"}>
                    <ListItem button >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={"Top Rated"} />
                    </ListItem>   
                </Link>
                 <Link to={"/MovieSection/trending"}>
                    <ListItem button >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={"Trending"} />
                    </ListItem>   
                </Link>
                 <Link to={"/MovieSection/discover"}>
                    <ListItem button >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={"Netflix Originals"} />
                    </ListItem>   
                </Link>
                 <Link to={"/MovieSection/action"}>
                    <ListItem button >
                        <ListItemIcon></ListItemIcon>
                        <ListItemText primary={"Action Movies"} />
                    </ListItem>   
                </Link>
              </List> 
              <Divider />
              <List>
                <Link to={loggedIn?'/':'/Login'}>
                    <ListItem button onClick={loggedIn && onLogout}>
                        <ListItemIcon>{loggedIn ? <MailIcon  />  : <InboxIcon /> }</ListItemIcon>
                        <ListItemText primary={loggedIn?'Logout':'Login'} />
                    </ListItem>   
                </Link>
              </List>
          </div>
      );
  };

  export default DrawerList