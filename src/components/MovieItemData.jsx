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
            console.log(movieData.id)
            console.log(results)
            const [trailer] = results.filter((item)=>item.type === "Trailer")
            console.log(trailer)
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
        <div>
            <h1>{movieData.title}</h1>
            <div className='player-wrapper'>
                {videoKey
                    ?
                        <ReactPlayer
                            className='react-player'
                            url={youtubeBaseUrl(videoKey)}
                            width='100%'
                            height='100%'
                        />
                    :
                        <div className='loading'>
                            <CircularProgress size={100} />
                        </div>
            }
              
            </div>
        </div>
    )
}

export default MovieItemData