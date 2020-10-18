import React, {useState,useEffect} from 'react';
import {useParams, Redirect} from 'react-router-dom'
import {tmdb} from '../../api'
import {getMovie} from '../../config/movies-config'

const MovieItem = () =>{
    const {id} = useParams()
    const [err, setErr] = useState(false)
    useEffect(()=>{
          ( async() => {
    try{
         setErr(false)
        const {data} = await tmdb.get(getMovie(id))
        console.log(data)
    }catch(err){
        setErr(true)
    }
})();  
    },[id])
    return (
        err? <Redirect to='/*'/>:
        <div>
            <h1>{id}</h1>
        </div>
    )
};

export default MovieItem;