
export const OrderReducer=(state={},action)=>{
    switch(action.type){
        case 'ORDER_REQUEST':
return{
     Loading:true,

 }
 case 'ORDER_SUCCESS':
    return{
    Loading:false,
    success:true,
}
    case 'OREDER_FAIL':
     return{
     loading:false,
    err:action.payload
     }
     default :return state;
    }
}