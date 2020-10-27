import React,{useEffect} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import {sectionType} from '../config/sectionTypes';
import * as pageTypes from '../actions/pageTypes';

const PageButtons = ({section}) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page[sectionType(section).state]);

    const handlePageMove = (page, direction) =>{
        if((direction === "Up" && page ===1000) || (direction === "Down" && page === 1)) return; 
            dispatch({type: pageTypes[sectionType(section)[`section${direction}Type`]]});
    }

useEffect(()=>{
    console.log('page', page)
},[page])

    return(
        <div className= "page_buttons">
<Fab variant="extended" color="primary" onClick={()=> handlePageMove(page, "Down")}>
<ArrowBackIcon  /> 
Page Down
</Fab>

<Fab variant="extended" color="primary" onClick={()=> handlePageMove(page, "Up")}>
Page Up
<ArrowForwardIcon  /> 
</Fab>


</div>
    )
}

export default PageButtons;