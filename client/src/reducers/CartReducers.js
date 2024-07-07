const initialState={
    Food:[]
}
export const CartReducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
           
            return {
                ...state,
                Food:[...state.Food,action.payload]
            }
            case'DELETE_FROM_CART':
            return{
                ...state,
                Food:state.Food.filter((Item)=>Item._id !==action.payload._id)
            }
            
        default:return state;
    }
}