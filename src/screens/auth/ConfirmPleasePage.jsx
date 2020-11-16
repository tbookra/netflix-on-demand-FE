import React,{useEffect} from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { dispatchConfimation} from '../../actions/authActions';

const ConfirmPleasePage = () => {
    const dispatch = useDispatch();
    const { emailConfirmed} = useSelector(state => state.auth);
    const history = useHistory()

    useEffect(()=>{
        console.log('emailConfirmed',emailConfirmed)
        emailConfirmed&&history.replace('/')
      }, [history, emailConfirmed])

    const handleClick = async () =>{
        try{
            await dispatch(dispatchConfimation()) ;
        }catch(e){
            console.log(e)
        }
    }
     
    return(
     
        <div>
            <h1>Please confirm your Email account</h1>
            <Button variant="contained" color="primary" onClick={handleClick}>
        Confirmed?
      </Button>
        </div>
    )
}

export default ConfirmPleasePage