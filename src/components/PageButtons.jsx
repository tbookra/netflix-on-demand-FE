import React,{useEffect} from 'react';
import {  useSelector, useDispatch } from 'react-redux';

import * as pageTypes from '../actions/pageTypes';

const PageButtons = ({section}) => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page.popularPage);

    const handlePageUp = () =>{
        dispatch({type: pageTypes.POPULAR_PAGE_UP})
        console.log('page up pushed!!', page, section)
    }
    const handlePageDown = () =>{
        dispatch({type: pageTypes.POPULAR_PAGE_DOWN})
        console.log('page up pushed!!', page)
    }

useEffect(()=>{
    console.log('page', page)
},[page])

    return(
        <div className= "page_buttons">
<div class="ui animated button primary" tabindex="0">
  <div class="visible content">Page Down</div>
  <div class="hidden content" onClick={handlePageDown}>
    <i class="left arrow icon"></i>
  </div>
</div>

<div class="ui animated button primary" tabindex="0">
  <div class="visible content" >Page Up</div>
  <div class="hidden content" onClick={handlePageUp}>
  <i class="right arrow icon"></i>
  </div>
</div>
</div>
    )
}

export default PageButtons;