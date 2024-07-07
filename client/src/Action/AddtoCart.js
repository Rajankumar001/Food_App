export const AddtoCart = (sweets, variants, quantity) => (dispatch, getState) => {
  
    var cartitem = {
      name: sweets.name,
      _id: sweets._id,
      image: sweets.image,
      variants: variants,
      quantity: quantity,
      prices: sweets.prices,
      price: sweets.prices[0][variants] * quantity,
    };

    dispatch({
      type: 'ADD_TO_CART',
      payload: cartitem,
    });

    localStorage.setItem('Food', JSON.stringify(getState().CartReducer.Food));
 
};
export const deleteFromCart=(sweets)=>(dispatch,getState)=>{
  dispatch({type:'DELETE_FROM_CART',payload:sweets})
  localStorage.setItem('Food', JSON.stringify(getState().CartReducer.Food));

}