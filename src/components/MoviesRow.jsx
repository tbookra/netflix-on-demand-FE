import React, {useState, useEffect} from 'react'
import {tmdb} from '../api'
import {getMovieImage} from '../config/movies-config'
import {  Link } from "react-router-dom";


const MoviesRow = ({rowUrl, rowTitle}) => {
const [movies, setMovies] = useState([])

useEffect(()=>{
    ( async() => {
    try{
         const {data:{results}} = await tmdb.get(rowUrl)
        setMovies(results)
    }catch(err){
        console(err)
    }
})();  
   
},[rowUrl])
    return(
        <div>
            <h3>{rowTitle}</h3>
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
}

export default MoviesRow