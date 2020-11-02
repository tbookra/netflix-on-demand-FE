import React, {useState, useEffect} from 'react'
import ReactPlayer from 'react-player/youtube'
import {tmdb} from '../api'
import {youtubeBaseUrl, getMovieVideo} from '../config/movies-config'
import {CircularProgress} from '@material-ui/core'
const MovieItemData = ({movieData}) => {
    const [isVideoExists, setIsVideoExists] = useState(null)
    const [videoKey, setVideoKey] = useState('')

    useEffect(()=>{
        (async()=>{
        try{
            const {data:{results}} = await tmdb.get(getMovieVideo(movieData.id))
            if(!results.length) return setIsVideoExists(false)
            setIsVideoExists(true)
            const [trailer] = results.filter((item)=>item.type === "Trailer")
            setVideoKey(trailer.key)
        }catch(err){
            console.log(err)
        }
        })()
    },[movieData])

    if(isVideoExists!==null && !isVideoExists){
        return(
            <h1>Sorry this Movie has no video to share</h1>
        )
    }

    return(
        <div className='movieItemDataRoot'>
            <h1>{movieData.title}</h1>
            
                {videoKey
                    ?
                    <div className='player-wrapper'>
                        <ReactPlayer
                        className='react-player'
                            url={youtubeBaseUrl(videoKey)}
                            width='50%'
                            height='50%'
                            controls
                        />
                    </div>
                    :
                    <div className='loading'>
                        <CircularProgress size={100} />
                    </div>
            }
              
            
        </div>
    )
}

export default MovieItemData