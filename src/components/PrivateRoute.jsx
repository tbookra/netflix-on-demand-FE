import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as tokenHandler from '../api/tokenHandler'


const PrivateRoute = ({component: Component, ...rest}) => {
    const token = tokenHandler.getToken()
   
    return (

        <Route {...rest} render={props => (
            token ?
                <Component {...props} />
            : <Redirect to="/Login" />
        )} />
    );
};

export default PrivateRoute;