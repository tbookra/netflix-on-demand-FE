import React, {useState} from 'react';
import {Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {Pricing} from '../../components'
import {useSelector} from 'react-redux'
const PurchasePage = () =>{
        const {currentMovie} = useSelector(state=>state.mainApp)
        const [isAddSuccessfully, setIsAddSuccessfully] = useState(false)
 
    const onAddMovie = async(movie_id) => {
        try{
            const {data:isMovieAdded} = await httpRequest.post('/movie/addMovie', {movieId:movie_id})
            setIsAddSuccessfully(isMovieAdded.added)
        }catch(err){
            console.log(err)
        }
    }

    return (
        isAddSuccessfully
        ?
            <Redirect to={`/movieItem/${currentMovie.id}`}/>
        :
            <Pricing addMovie={onAddMovie}/>       
    )
};

export default PurchasePage;