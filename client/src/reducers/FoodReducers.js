
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
export const addFoodReducers=(state={Food:[]},action)=>{
    switch(action.type){
        case 'ADD_FOOD_REQUEST':
        return{
              ...state,
              loading:true,
        }
        case 'ADD_FOOD_SUCCESS':
            return{
                Food:Array.isArray(action.payload) ? action.payload : [],
                loading:false,
            }
            case 'ADD_FOOD_FAILURE':
                return{
                    err:action.payload,
                    loading:false,
                }
                default:
                    return state
    }

}
export const editFoodReducers = (state = {}, action) => {
    switch (action.type) {
      case 'GET_EDITFOOD_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'GET_EDITFOOD_SUCCESS':
        return {
          ...state,
          Food: action.payload, // Directly assigning the returned food item object
          loading: false,
        };
  
      case 'GET_EDITFOOD_FAILURE':
        return {
          ...state,
          error: action.payload, // Added error handling
          loading: false,
        };
  
      default:
        return state;
    }
  };


  export const updateFoodReducers = (state = {Food:[]}, action) => {
    switch (action.type) {
      case 'GET_UPDATEFOOD_REQUEST':
        return {
          ...state,
          loading: true,
        };
  
      case 'GET_UPDATEFOOD_SUCCESS':
        return {
          ...state,
          Food: action.payload,
          sucsess: true, // Directly assigning the returned food item object
          loading: false,
        };
  
      case 'GET_UPDATEFOOD_FAILURE':
        return {
          ...state,
          error: action.payload, // Added error handling
          loading: false,
        };
  
      default:
        return state;
    }
  };
  