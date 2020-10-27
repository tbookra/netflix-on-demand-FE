import React,{useEffect} from 'react';
import {  useSelector, useDispatch } from 'react-redux';
import {sectionType} from '../config/sectionTypes';
import * as pageTypes from '../actions/pageTypes';

const PageButtons = ({section}) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page[sectionType(section).state]);

    const handlePageUp = () =>{
        dispatch({type: pageTypes[sectionType(section).sectionUpType]})
        console.log('page up a!!', pageTypes[sectionType(section).sectionUpType])
        // console.log('page up 2!!', pageTypes[sectionType(section).sectionUpType])
        console.log('page up b!!', page, section)
        // popular top_rated trending discover action
    }
    const handlePageDown = () =>{
        dispatch({type: pageTypes[sectionType(section).sectionDownType]})
        console.log('page up pushed!!', page)
    }

useEffect(()=>{
    console.log('page', page)
},[page])

    return(
        <div className= "page_buttons">
<div class="ui animated button primary" tabindex="0">
  <div class="visible content">Page Down</div>
  <div class="hidden content" onClick={page ===1 ? "" : handlePageDown}>
    <i class="left arrow icon"></i>
  </div>
</div>

<div class="ui animated button primary" tabindex="0">
  <div class="visible content" >Page Up</div>
  <div class="hidden content" onClick={page ===1000 ? "" : handlePageUp}>
  <i class="right arrow icon"></i>
  </div>
</div>
</div>
    )
}

export default PageButtons;