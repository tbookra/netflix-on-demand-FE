import React, {useState} from 'react';
import {useLocation, Redirect} from 'react-router-dom'
import { httpRequest} from '../../api'
import {Pricing} from '../../components'
const PurchasePage = () =>{
    const {state:{movieData}} = useLocation()
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
            <Redirect to={{
                pathname: `/movieItem/${movieData.id}`,
                state: {movieData}
            }}/>
        :
            <Pricing movieData={movieData} addMovie={onAddMovie}/>
       
       
    )
};

export default PurchasePage;