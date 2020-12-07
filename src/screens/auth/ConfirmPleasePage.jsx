import React,{useEffect} from 'react'
import {  useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

const ConfirmPleasePage = () => {
    const { emailConfirmed} = useSelector(state => state.notSavedAuth);
    const history = useHistory()

    useEffect(()=>{
        console.log('emailConfirmed',emailConfirmed)
        emailConfirmed&&history.replace('/')
      }, [history, emailConfirmed])

       
    return(
     
        <div>
            <h1>Please confirm your Email account</h1>
 
        </div>
    )
}

export default ConfirmPleasePage