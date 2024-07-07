
  export const getFoodReducers=(state={Food:[]},action)=>{
    switch(action.type){
        case 'GET_FOOD_REQUEST':
        return{
              ...state,
              loading:true,
        }
        case 'GET_FOOD_SUCCESS':
            return{
                Food:Array.isArray(action.payload) ? action.payload : [],
                loading:false,
            }
            case 'GET_FOOD_FAILURE':
                return{
                    err:action.payload,
                    loading:false,
                }
                default:
                    return state
    }

}