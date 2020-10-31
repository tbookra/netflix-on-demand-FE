import React from 'react';
import {Avatar, Button, CssBaseline, Typography, makeStyles, Container} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'; // import costum input...
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

 const SearchPage = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Search your favorate show here
        </Typography>
        {/*  */}
        {/* 
        צריך לשנות את הקומפוננטה של האינפוט ולהטמיע פורמיק עם יופ
        */}
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="search"
            label='Search Here...'
            name="search"
            autoComplete="search"
            autoFocus           
          />
          <Button
            type="submit" 
            variant="contained"
            color="secondary"
            className={classes.submit}
          >           
              Search 
            <SearchIcon />
          </Button>       
        </form>
        {/*  */}
      </div>
    
    </Container>
  );
};

export default SearchPage;