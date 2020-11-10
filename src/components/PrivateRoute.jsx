import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getToken} from '../api/tokenHandler'
import {useSelector} from 'react-redux';


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = getToken()
    const { changePassword} = useSelector(state => state.auth);
    
    return (
        !changePassword ? 
        <Route {...rest} render={props => (
            
            token ?
                <Component {...props} />
            : <Redirect to="/Login" />
        )} /> : <Redirect to="/ChangePasswordPage" />
    );
};

export default PrivateRoute;