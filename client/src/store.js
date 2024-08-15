import {legacy_createStore,combineReducers,applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {getFoodReducers,addFoodReducers,editFoodReducers,} from './reducers/FoodReducers';
import { CartReducer } from './reducers/CartReducers';
import { RegisterReducer } from './reducers/RegisterReducer';
import { LoginReducer } from './reducers/RegisterReducer';
import { OrderReducer,AlluserorderReducer } from './reducers/OrederReducer';
import { AllOrderReducer } from './reducers/OrederReducer';
import { updateFoodReducers } from './reducers/FoodReducers';
 const rootReducer=combineReducers({
    getFoodReducers:getFoodReducers,
    CartReducer:CartReducer,
    OrderReducer:OrderReducer,
    LoginReducer:LoginReducer,
    RegisterReducer:RegisterReducer,
    AllOrderReducer:AllOrderReducer,
    addFoodReducers:addFoodReducers,
    editFoodReducers:editFoodReducers,
    updateFoodReducers:updateFoodReducers,
    AlluserorderReducer:AlluserorderReducer,
 })
 const Food=localStorage.getItem('Food')? JSON.parse(localStorage.getItem('Food')):[]
 const currentUser=localStorage.getItem('currentUser')? JSON.parse(localStorage.getItem('currentUser')):null;
 const initialstate={
   CartReducer:{
   Food:Food,
   },
   LoginReducer:{
      currentUser:currentUser
   }
 }
 const Middleware=[thunk];
 const store=legacy_createStore(
    rootReducer,
    initialstate,
    composeWithDevTools(applyMiddleware(...Middleware))
 )
 export default store;