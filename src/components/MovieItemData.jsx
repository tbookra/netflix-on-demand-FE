import React from 'react'

const MovieItemData = (props) => {
console.log('movie item data props', props)
    return(
        <div>
            <h1>{props.movieData.id}</h1>
        </div>
    )
}

export default MovieItemData