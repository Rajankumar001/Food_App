import axios from'axios';
 export const getAllFood=()=>async(dispatch)=>{
    dispatch({type:'GET_FOOD_REQUEST'
    })
    try{
        const res=await axios.get('/api/food/getAllFood');
        console.log(res);
        dispatch({type:'GET_FOOD_SUCCESS',payload:res.data.result})
    }catch(err){
        dispatch({type:'GET_FOOD_FAILURE',payload:err})
    }
 }