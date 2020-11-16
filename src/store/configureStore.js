import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers";
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key:'root',
  storage:storage,
  whitelist:['mainApp'], // adding back the 'auth' !!!!!!!!!
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk))

export const persistedStore = persistStore(store)

