import React, {useState} from 'react';
import {SearchForm} from '../../forms';
import {SearchedMovies} from '../../components';
import {Avatar, CssBaseline, Typography, makeStyles, Container} from '@material-ui/core'
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
    marginTop: '10%',
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



 const SearchPage = (props) => {
  const classes = useStyles();
  // const [errorMessage, setErrorMessage] = useState('');
  const [searchStr, setSearchStr] = useState('');
  const [page, setPage] = useState(1);

const handlePageMove = ( direction) =>{
  if(direction === "Up" && page !==1000 ) {
      setPage(page + 1) 
  } else if ((direction === "Down" && page !==1)){
      setPage(page - 1) 
  }; 
  console.log(page)
}
const setString = (str) => {
  setSearchStr(str)
}
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <SearchIcon />
        </Avatar>
        <Typography component="h1" variant="h5" >
          Search your favorate show here
        </Typography>
        
       <SearchForm   setString={setString}  />
       <SearchedMovies searchString={searchStr} handlePageMove={handlePageMove} page={page} />

<Typography component="h1" variant="h5" >
{/* {errorMessage && <h4 style={{ color: "red" }}>{errorMessage}</h4>} */}
        </Typography>
         
        
       
       
      </div>
    
    </Container>
  );
};

export default SearchPage;