import React,{useEffect} from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { httpRequest } from '../../api';
import { dispatchConfimation} from '../../actions/authActions';

const ConfirmationAccepted = () => {
    const dispatch = useDispatch();
    const { emailConfirmed} = useSelector(state => state.notSavedAuth);
    const history = useHistory()

    useEffect(()=>{
      
       (async()=>{
        console.log('hello')
         try{
          const data = await httpRequest.get('/auth/confirmed');
          console.log('data:::', data)
         }catch(err){
           console.log(err)
         }
       })()
     },[])

    
     
    return(
     
        <div>
            <h1>Thank you for confirming!</h1>
            <h2>Wellcome abord! hope you enjoy our site.</h2>
            <h2>Now you can start expoloring our owesome vidio collection</h2>

        </div>
    )
}

export default ConfirmationAccepted