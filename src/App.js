import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { routes } from './config/routes-config';
import { Navbar, PrivateRoute } from './components';
import { ThemeProvider, createMuiTheme, CssBaseline } from '@material-ui/core'
import { useDarkMode } from './hooks'
{/* 
  
  <App />
 */}
const themeObject = {
  palette: {
    type: "dark"
  }
}

const App = () => {
  const [theme, toggleDarkMode] = useDarkMode(themeObject)
  const themeConfig = createMuiTheme(theme)
  return (
    <ThemeProvider theme={themeConfig}>
      <CssBaseline />
      <div className="App ui container">
        <Navbar toggleDarkMode={toggleDarkMode} theme={themeConfig} />
        <Switch>
          {
            routes.map((route, index) => (
              route.privateRoute ?
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
    </ThemeProvider>
  );
};

export default App;
