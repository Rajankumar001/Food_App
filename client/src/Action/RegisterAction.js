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
       const response=await axios.post('api/food/Login',user);
      dispatch({type:'LOGIN_SUCCESS',payload:response.data})
      localStorage.setItem('currentUser',JSON.stringify(response.data))
      window.location.href='/';
   }catch(err){
      dispatch({type:'LOGIN_ERROR',payload:err})
   }
}
 export const logoutUser=()=>dispatch=>{
   localStorage.removeItem('currentUser');
   window.location.href='/login'
 }