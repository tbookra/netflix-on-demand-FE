import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {PageButtons} from './';
import {tmdb} from '../api'
import {getMovieImage,getSearchMovies } from '../config/movies-config';
import Skeleton from '@material-ui/lab/Skeleton';
import {insertMovie} from '../actions/appActions'
import {useDispatch} from 'react-redux';

const SearchedMovies = ({searchString, page, handlePageMove }) => {
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        ( async() => {
            try{
                // dispatch({type:appTypes.CLEAN_STATE})
                const url = getSearchMovies(searchString['searchString'],page)
                const {data:{results}} = searchString ? await tmdb.get(url) : "";
                setMovies(results)
            }catch(err){
                console.log(err)
            }
        })();  
    },[searchString,page])

    console.log('movies',movies.length)
    return (
        <div>
            <Container maxWidth="lg">
            {(!searchString || (movies.length < 20 && page === 1) ) ? "" : <PageButtons  handlePageMove={handlePageMove} /> }
            {movies.length > 0 ? 
            <div id='moviesSection' >
            {movies.map((movie, index)=>(
                movie
                ?
                    <div key={index} className='moviesRowItem'>
                         <Link 
                        to={`/movieItem/${ movie.id}`}
                        onClick={()=>dispatch(insertMovie(movie.id))}
                        >
                            <img src={getMovieImage(movie.poster_path)} alt="img"/>
                        </Link> 
                    </div> 
                :
                    <Skeleton variant="rect" width={210} height={118} />    
            ))}
        </div> :
        <Skeleton variant="rect" width={400} height={500} style={{backgroundColor: "inherit"}} />
        }
            
            {(!searchString || (movies.length < 20 && page === 1) ) ? "" : <PageButtons  handlePageMove={handlePageMove} /> }
            </Container>
        </div>
    )
};

export default SearchedMovies;
