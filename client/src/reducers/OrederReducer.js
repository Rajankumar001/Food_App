
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
export const AllOrderReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case 'ALL_ORDER_REQUEST':
            return{
                loading:true,
                ...state,
                
            }
            case 'ALL_ORDER_SUCCESS':
            return{
                loading:false,
                success:true,
                orders:Array.isArray(action.payload) ? action.payload : [],
                
            }
            case 'ALL_ORDER_FAIL':
            return{
                loading :false,
                error:action.payload
        }
        default:
            return state;
    }
}
export const AlluserorderReducer=(state={orders:[]},action)=>{
    switch(action.type){
        case 'ALL_USERORDER_REQUEST':
            return{
                loading:true,
                ...state,
                
            }
            case 'ALL_USERORDER_SUCCESS':
            return{
                loading:false,
                success:true,
                orders:Array.isArray(action.payload) ? action.payload : [],
                
            }
            case 'ALL_USERORDER_FAIL':
            return{
                loading :false,
                error:action.payload
        }
        default:
            return state;
    }
}