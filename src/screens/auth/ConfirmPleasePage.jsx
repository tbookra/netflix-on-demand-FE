import React,{useEffect, useState} from 'react'
import {  useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from "@material-ui/core";
import { httpRequest } from '../../api';


const ConfirmPleasePage = () => {
    const [userEmail, setUserEmail] = useState("");
    const [rememberMe, setRememberMe] = useState('false');
    const { emailConfirmed} = useSelector(state => state.notSavedAuth);
    const history = useHistory()

    useEffect(()=>{
        setUserEmail(localStorage.getItem("email"));
        setRememberMe(localStorage.getItem("rememberMe"))
        localStorage.removeItem('email');
        localStorage.removeItem('rememberMe');
        console.log('emailConfirmed',emailConfirmed)
        emailConfirmed&&history.replace('/')
      }, [history, emailConfirmed])

      
       
      const handleResend = async () => {
        
        await httpRequest.post('/auth/resend', {userEmail,rememberMe})
      }

    return(
     
        <div>
            <h1>Please confirm your Email account at {userEmail}</h1>
            <p>if you haven't recieved an Email from us, please check if the Email above is correct </p>
            <p>to resend the email please press <Button onClick={handleResend}>HERE</Button></p>
        </div>
    )
}

export default ConfirmPleasePage