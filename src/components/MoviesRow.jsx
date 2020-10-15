import React, {useState, useEffect} from 'react'
import {tmdb} from '../api'
import * as moviesUrl from '../config/moviesUrls'
import {  Link } from "react-router-dom";


const MoviesRow = ({rowUrl, title}) => {
const [movies, setMovies] = useState([])

useEffect(()=>{
    
    const fetchData = async(url) => {
        const {data:{results}} = await tmdb.get(url)
        setMovies(results)
    }
    fetchData(rowUrl)
   
},[rowUrl])
    return(
        <div>
            <h3>{title}</h3>
            <div id='moviesRow'>
                
            {movies.map((movie, index)=>{
                return(
                    <div key={index} className='moviesRowItem'>
                        <Link to={`/movieItem/${movie.id}`}>
                                <img src={moviesUrl.getMovieImage(movie.poster_path)} alt="img"/>
                        </Link>
                        
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default MoviesRow