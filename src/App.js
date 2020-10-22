import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { routes } from './config/routes-config';
import {Navbar,PrivateRoute} from './components';

const App = () => {

  return (
    <div className="App ui container">

      <Navbar />
            <Switch>
           {
             routes.map((route,index)=>(
               route.privateRoute?
               <PrivateRoute
               key={index}
               path={route.path}
               component={route.component}
               exact={route.exact}
               />
               :
                <Route
               key={index}
               path={route.path}
               component={route.component}
               exact={route.exact}
               />

             ))
           }
            </Switch>

    </div>
  );
};

export default App;
