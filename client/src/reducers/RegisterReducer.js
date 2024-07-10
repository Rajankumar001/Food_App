
export const RegisterReducer=(state={},action)=>{
    switch(action.type){
        case 'REGISTER_REQUEST':
            return{
               loading:true,
            }
            case 'REGISTER_SUCCESS':
                return{
                    loading:false,
                    success:true,
                }
                case 'REGISTER_ERROR':
                    return{
                        loading:false,
                        err:action.payload
                        
                    }
                    default :return {
                        state
                    }
    }

}
export const LoginReducer=(state={},action)=>{
    switch(action.type){
        case 'LOGIN_REQUEST':
            return{
               loading:true,
            }
            case 'LOGIN_SUCCESS':
                return{
                    loading:false,
                    success:true,
                    currentUser:action.payload,
                }
                case 'LOGIN_ERROR':
                    return{
                        loading:false,
                        err:action.payload
                        
                    }
                    default :return state
                    
    }

}