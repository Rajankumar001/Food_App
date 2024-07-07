 import axios from 'axios';
 export const RegisterAction=(user)=>async dispatch=>{
     dispatch({type:'REGISTER_REQUEST'})
     try{
       await axios.post('/api/food/Register',user);
      dispatch({type:'REGISTER_SUCCESS'})

     }catch(err){
        dispatch({type:'REGISTER_ERROR',payload:err})
     }
}
 


export const LoginAction=(user)=>async dispatch=>{
   dispatch({type:'LOGIN_REQUEST'})
   try{
      await axios.post('api/food/Login',user);
      dispatch({type:'LOGIN_SUCCESS'})
   }catch(err){
      dispatch({type:'REGISTER_ERROR',payload:err})
   }
}