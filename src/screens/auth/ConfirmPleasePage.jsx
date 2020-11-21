import React,{useEffect} from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import { dispatchConfimation} from '../../actions/authActions';

const ConfirmPleasePage = () => {
    const dispatch = useDispatch();
    const { emailConfirmed} = useSelector(state => state.notSavedAuth);
    const history = useHistory()

    useEffect(()=>{
        console.log('emailConfirmed',emailConfirmed)
        emailConfirmed&&history.replace('/')
      }, [history, emailConfirmed])

    // const handleClick = async () =>{
    //     try{
    //         await dispatch(dispatchConfimation()) ;
    //     }catch(e){
    //         console.log(e)
    //     }
    // }
     
    return(
     
        <div>
            <h1>Please confirm your Email account</h1>
 
        </div>
    )
}

export default ConfirmPleasePage