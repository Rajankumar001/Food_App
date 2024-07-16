import axios from 'axios';
export const OrderAction=(token,subTotal)=>async(dispatch,getState)=>{
dispatch({type:'ORDER_REQUEST'})
const Food=getState().CartReducer.Food;
const currentUser=getState().LoginReducer.currentUser
try{
    console.log("api is fetching")
 console.log('OrderAction - Sending Data:', { token, subTotal, currentUser, Food });
const res=await axios.post("/api/placingorder/order",{Food,currentUser,token,subTotal})
console.log("api do not working...")
console.log(res);
dispatch({type:'ORDER_SUCCESS',
    payload:res.data
})
console.log(res)
}
catch(err){
dispatch({type:'ORDER_FAIL'})
console.log(err)
}
}