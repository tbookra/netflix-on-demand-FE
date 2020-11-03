import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider as StoreProvider } from "react-redux";
import {PersistGate} from 'redux-persist/es/integration/react'
import {persistedStore, store} from "./store/configureStore";
import {ThemeProvider, createMuiTheme, CssBaseline} from '@material-ui/core'

// const theme = (darkMode) => createMuiTheme({
//   palette:{
//     type:darkMode?"dark":"light"
//   }
// })

console.log('index store', store.getState())
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <PersistGate persistor={persistedStore} loading={null}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline/>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
