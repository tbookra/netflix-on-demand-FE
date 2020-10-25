import React, {useState,useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import {tmdb, httpRequest} from '../../api'
import {getMovie} from '../../config/movies-config'
import {Pricing} from '../../components'
const PurchasePage = () =>{
    const [movie, setMovie] = useState({})
    const {movieId} = useParams();
    const history = useHistory()
    const onAddMovie = async(movie_id) => {
        try{
            const {data:isMovieAdded} = await httpRequest.post('/movie/addMovie', {movieId:movie_id})
            console.log('isMovieAdded',isMovieAdded)
            history.replace(`/movieItem/${movieId}`)
        }catch(err){
            console.log(err)
        }
    }
    
    useEffect(()=>{
        (async()=>{
               try{
                   const {data:movieData} = await tmdb.get(getMovie(movieId))
             setMovie(movieData)
             console.log(movieData)
        }catch(err){
            console.log(err)
        }
          
        })()
    },[movieId])
    return (
        <div>
            <h3>PurchasePage</h3>
            <Pricing movieData={movie} addMovie={onAddMovie}/>
        </div>
       
    )
};

export default PurchasePage;