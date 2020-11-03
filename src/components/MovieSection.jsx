import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {PageButtons} from './';
import {tmdb} from '../api'
import {getMovieImage } from '../config/movies-config'
import Skeleton from '@material-ui/lab/Skeleton';
import {insertMovie} from '../actions/appActions'
import {useDispatch} from 'react-redux'
import * as appTypes from '../actions/appTypes'
const MovieSection = ({sectionUrl, section, handlePageMove }) => {
    const dispatch = useDispatch()
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        ( async() => {
            try{
                dispatch({type:appTypes.CLEAN_STATE})
                const {data:{results}} = await tmdb.get(sectionUrl)
                setMovies(results)
            }catch(err){
                console.log(err)
            }
        })();  
    },[sectionUrl,dispatch])

    return (
        <div>
            <Container maxWidth="lg">
            <PageButtons section={section} handlePageMove={handlePageMove} />
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
            </div>
            <PageButtons section={section}  handlePageMove={handlePageMove}  />
            </Container>
        </div>
    )
};

export default MovieSection;
