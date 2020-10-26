import React, {useState, useEffect} from 'react'
import {useParams, Redirect, Link} from 'react-router-dom'
import {tmdb} from '../api'
import {getMovieImage , getMovie} from '../config/movies-config'


const MovieSection = ({sectionUrl}) => {
const [movies, setMovies] = useState([])

useEffect(()=>{
    ( async() => {
    try{
        console.log('sectionUrl',sectionUrl)
         const {data:{results}} = await tmdb.get(sectionUrl)
         console.log('results',results)
        setMovies(results)
    }catch(err){
        console.log(err)
    }
})();  
   
},[sectionUrl])

    return (
        <div>
            <div id='moviesRow'>
                
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
        </div>
    )
};

export default MovieSection;
