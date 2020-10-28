import React from 'react';
import Fab from '@material-ui/core/Fab';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const PageButtons = ({handlePageMove}) => {


    return(
        <div className= "page_buttons">
<Fab variant="extended" color="primary" onClick={()=> handlePageMove( "Down")}>
<ArrowBackIcon  /> 
Page Down
</Fab>

<Fab variant="extended" color="primary" onClick={()=> handlePageMove( "Up")}>
Page Up
<ArrowForwardIcon  /> 
</Fab>


</div>
    )
}

export default PageButtons;