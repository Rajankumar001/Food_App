import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getFoodReducers} from './reducers/FoodReducers';
import { CartReducer } from './reducers/CartReducers';
import { RegisterReducer } from './reducers/RegisterReducer';
import { LoginReducer } from './reducers/RegisterReducer';
 const rootReducer=combineReducers({
    getFoodReducers:getFoodReducers,
    CartReducer:CartReducer,
    LoginReducer:LoginReducer,
    RegisterReducer:RegisterReducer
 })
 const Food=localStorage.getItem('Food')? JSON.parse(localStorage.getItem('Food')):[]
 const initialstate={
   CartReducer:{
   Food:Food
   }
 }
 const Middleware=[thunk];
 const store=legacy_createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...Middleware))
 )
 export default store;