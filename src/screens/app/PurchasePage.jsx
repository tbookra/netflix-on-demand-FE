import React from 'react';
import {useHistory, useLocation} from 'react-router-dom'
import { httpRequest} from '../../api'
import {Pricing} from '../../components'
const PurchasePage = () =>{
     const {state:{movieData}} = useLocation()
    console.log('purchase', movieData)
    const history = useHistory()
    const onAddMovie = async(movie_id) => {
        try{
            const {data:isMovieAdded} = await httpRequest.post('/movie/addMovie', {movieId:movie_id})
            console.log('isMovieAdded',isMovieAdded)
            history.replace(`/movieItem/${movie_id}`)
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <Pricing movieData={movieData} addMovie={onAddMovie}/>
        </div>
       
    )
};

export default PurchasePage;