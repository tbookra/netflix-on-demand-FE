import * as appTypes from './appTypes'

const addMovie = (movieData) => {
    return{
        type:appTypes.INSERT_MOVIE,
        payload:movieData
    }
}

export const insertMovie = ({poster_path,id,title,overview,releas_date}) => {
    return(dispatch) => {
        const movieData = {id,title,overview,poster_path,releas_date}
        dispatch(addMovie(movieData))
    }
}