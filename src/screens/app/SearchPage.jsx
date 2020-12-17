import React, { useState } from "react";
import { SearchForm } from "../../forms";
import { SearchedMovies } from "../../components";
import {
  Avatar,
  CssBaseline,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: "10%",
  },
  search_results: {
    marginTop: "10%",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const SearchPage = (props) => {
  const classes = useStyles();
  const [searchStr, setSearchStr] = useState("");
  const [page, setPage] = useState(1);

  const handlePageMove = (direction) => {
    if (direction === "Up" && page !== 1000) {
      setPage(page + 1);
    } else if (direction === "Down" && page !== 1) {
      setPage(page - 1);
    }
    console.log(page);
  };
  const setString = (str) => {
    setTimeout(() => {
      setSearchStr(str);
    }, 650);
  };

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

        <div className={classes.form}>
          <SearchForm setString={setString} />
        </div>

        <div className={classes.search_results}>
          <SearchedMovies
            searchString={searchStr}
            handlePageMove={handlePageMove}
            page={page}
          />
        </div>

        <Typography component="h1" variant="h5"></Typography>
      </div>
    </Container>
  );
};

export default SearchPage;
