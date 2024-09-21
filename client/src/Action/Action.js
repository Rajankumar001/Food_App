import axios from'axios';
const baseUrl = "https://hungryfoodapp-api-1.onrender.com/";
 export const getAllFood=()=>async(dispatch)=>{
    dispatch({type:'GET_FOOD_REQUEST'
    })
    try{
        const res=await axios.get(`${baseUrl}api/food/getAllFood`);
        console.log(res);
        dispatch({type:'GET_FOOD_SUCCESS',payload:res.data.result})
    }catch(err){
        dispatch({type:'GET_FOOD_FAILURE',payload:err})
    }
 }
 export const addFood=(foods)=>async(dispatch)=>{
    dispatch({type:'ADD_FOOD_REQUEST'
    })
    try{
        const res=await axios.post(`${baseUrl}api/food/addFood`,{foods});
        console.log(res);
        dispatch({type:'ADD_FOOD_SUCCESS',payload:res.data})
    }catch(err){
        dispatch({type:'ADD_FOOD_FAILURE',payload:err})
    }
 }
 export const Editfood = (geteditbyId) => async (dispatch) => {
    dispatch({ type: 'GET_EDITFOOD_REQUEST' });
  
    try {
      const res = await axios.post(`${baseUrl}api/food/editItem`,{geteditbyId});
      console.log(res);
  
      // Dispatch the success action with the response data
      dispatch({ type: 'GET_EDITFOOD_SUCCESS', payload: res.data.Food });
    } catch (err) {
      // Dispatch the failure action with the error
      dispatch({ type: 'GET_EDITFOOD_FAILURE', payload: err });
    }
  };
  export const updatedfood = (updatebyId) => async (dispatch) => {
    dispatch({ type: 'GET_UPDATEFOOD_REQUEST' });
  
    try {
      // Use template literal to correctly insert the ID into the URL
      const res = await axios.post(`${baseUrl}api/food/updateItem`,{updatebyId});
      console.log(res);
  
      // Dispatch the success action with the response data
      dispatch({ type: 'GET_UPDATEFOOD_SUCCESS', payload: res.data.Food });
      window.location.href='/Admin/Itemlist';
    } catch (err) {
      // Dispatch the failure action with the error
      dispatch({ type: 'GET_UPDATEFOOD_FAILURE', payload: err });
    }
  };
  export const deletedfood = (deletebyId) => async (dispatch) => {
    try {
      const res = await axios.post(`${baseUrl}api/food/deleteItem`,{deletebyId});
      console.log(res)
      window.location.href='/Admin/Itemlist';
    } catch (err) {
       console.log(err);
    }
  };
  export const FilterSearch=(searchkey,category)=>async(dispatch)=>{
    let filterfood;
         dispatch({type:'GET_FOOD_REQUEST'})
    try{
        const res=await axios.get(`${baseUrl}api/food/getAllFood`);
        filterfood=res.data.result.filter((Food)=>
          Food.name.toLowerCase().includes(searchkey)
        )
        if(category !=="all"){
          filterfood=res.data.result.filter((Food)=>
            Food.category.toLowerCase()===category
          )
        }
        console.log(res);

        dispatch({type:'GET_FOOD_SUCCESS',payload:filterfood})
    }catch(err){
        dispatch({type:'GET_FOOD_FAILURE',payload:err})
    }
 }
  