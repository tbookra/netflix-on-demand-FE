import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import {tmdb} from '../api'
import {youtubeBaseUrl, getMovieVideo} from '../config/movies-config'

const MovieItemData = ({movieData}) => {
    const [videoKey, setVideoKey] = useState('')

    useEffect(()=>{
        (async()=>{
        try{
            const {data:{results}} = await tmdb.get(getMovieVideo(movieData.id))
            const [trailer] = results.filter((item)=>item.type === "Trailer")
            setVideoKey(trailer.key)
        }catch(err){
            console.log(err)
        }
        })()
    },[movieData])
    return(
        <div>
            <h1>{movieData.title}</h1>
            <div className='player-wrapper'>
                <ReactPlayer
                    className='react-player'
                    url={youtubeBaseUrl(videoKey)}
                    width='100%'
                    height='100%'
                />
            </div>
        </div>
    )
}

export default MovieItemData