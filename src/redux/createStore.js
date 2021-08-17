import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import {CountReducer} from "./Count.reducer";
import {CharacterReducer} from "./Character.reducers"
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    character: CharacterReducer,
    count: CountReducer
})

export  const store = createStore(rootReducer, applyMiddleware(thunk))