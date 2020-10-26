import React from 'react'
import clsx from 'clsx';
import {List, Divider, ListItem, ListItemIcon, ListItemText, makeStyles} from '@material-ui/core'
import {MoveToInbox as InboxIcon, Mail as MailIcon} from '@material-ui/icons'
import { useSelector, useDispatch  } from 'react-redux';
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
                <Link to={loggedIn?'/':'/Login'}>
                    <ListItem button onClick={loggedIn && onLogout}>
                        <ListItemIcon>{loggedIn ? <MailIcon  />  : <InboxIcon /> }</ListItemIcon>
                        <ListItemText primary={loggedIn?'Logout':'Login'} />
                    </ListItem>   
                </Link>
              </List>
              <Divider />
              {/* <List>
                  {['All mail', 'Trash', 'Spam'].map((text, index) => (
                      <ListItem button key={text}>
                          <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                          <ListItemText primary={text} />
                      </ListItem>
                  ))}
              </List> */}
          </div>
      );
  };

  export default DrawerList