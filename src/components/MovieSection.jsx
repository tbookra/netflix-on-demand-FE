import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom';
import Container from '@material-ui/core/Container';
import {PageButtons} from './';
import {tmdb} from '../api'
import {getMovieImage } from '../config/movies-config'


const MovieSection = ({sectionUrl, section, handlePageMove }) => {
const [movies, setMovies] = useState([])

useEffect(()=>{
    ( async() => {
    try{
         const {data:{results}} = await tmdb.get(sectionUrl)
        setMovies(results)
    }catch(err){
        console.log(err)
    }
})();  
   
},[sectionUrl])

    return (
        <div>
            <Container maxWidth="lg">
            <PageButtons section={section} handlePageMove={handlePageMove} />
            <div id='moviesSection' >
                
                {movies.map((movie, index)=>{
                    return(
                        <div key={index} className='moviesRowItem'>
                            <Link to={`/movieItem/${movie.id}`}>
                                    <img src={getMovieImage(movie.poster_path)} alt="img"/>
                            </Link>
                            
                        </div>
                    )
                })}
                </div>
    <PageButtons section={section}  handlePageMove={handlePageMove}  />
    </Container>
        </div>
    )
};

export default MovieSection;
